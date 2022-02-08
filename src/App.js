import React, { lazy, Suspense } from 'react'
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
// import HomePage from './pages/homepage/homepage.component';
// import ShopPage from './pages/shop/shop.component';
// import SignInSignUp from './pages/signin-signup/sign-in.page';
// import Checkout from './pages/checkout/checkout.component';
import HeaderComponent from './components/header/header.component';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createUserDocument } from './utils/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import ErrorBoundry from './components/error-boundry/error-boundry.component';
import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const SignInSignUp = lazy(() => import('./pages/signin-signup/sign-in.page'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))

class App extends React.Component {
  handleAuthStateChange = async (user) => {
    const { setCurrentUser } = this.props;
    if (user) {
      const { displayName, email, uid } = user
      const userPayload = {
        displayName,
        email,
        uid,
        createdAt: new Date()
      }
      await createUserDocument(userPayload)
      setCurrentUser(userPayload)
    } else {
      setCurrentUser(null)
    }
  }

  unsubscribeAuthHandler = null;

  componentDidMount() {
    const auth = getAuth();
    this.unsubscribeAuthHandler = onAuthStateChanged(auth, this.handleAuthStateChange);
  }

  componentWillUnmount() {
    if (this.unsubscribeAuthHandler) {
      this.unsubscribeAuthHandler()
    }
  }

  render() {
    return (
      <BrowserRouter>
        <HeaderComponent />
        <ErrorBoundry>
            <Switch>
              <Suspense fallback={<Spinner />}>
                <Route
                  exact
                  path={'/'}
                  component={HomePage}
                />
                <Route
                  path={'/shop'}
                  component={ShopPage}
                />
                <Route
                  exact
                  path={'/checkout'}
                  component={CheckoutPage}
                />
                <Route
                  exact
                  path={'/signin'}
                  render={
                    this.props.currentUser
                      ? () => <Redirect to={'/'} />
                      : () => <SignInSignUp />
                    }
                />
              </Suspense>
            </Switch>
        </ErrorBoundry>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (payload) => {
    dispatch(setCurrentUser(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
