import StripeCheckout from 'react-stripe-checkout';
import appConstants from '../../constants/appConstants';

const StripeButton = ({ price }) => {
    const finalPrice = price * 100

    const onToken = (token) => {
        alert('Payment Successful.')
    }

    return (
        <StripeCheckout
            name="CRWN CLOTHING CO." // the pop-in header title
            description="Cart Checkout" // the pop-in header subtitle
            image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
            ComponentClass="div"
            // panelLabel="Give Money" // prepended to the amount in the bottom pay button
            amount={finalPrice} // cents
            currency="USD"
            stripeKey={appConstants.stripePublishableKey}
            // locale="zh"
            // email="info@vidhub.co"
            // Note: Enabling either address option will give the user the ability to
            // fill out both. Addresses are sent as a second parameter in the token callback.
            shippingAddress
            billingAddress={false}
            // Note: enabling both zipCode checks and billing or shipping address will
            // cause zipCheck to be pulled from billing address (set to shipping if none provided).
            // zipCode={false}
            // alipay // accept Alipay (default false)
            // bitcoin // accept Bitcoins (default false)
            allowRememberMe // "Remember Me" option (default true)
            token={onToken} // submit callback
            // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
            // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
            // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
            // you are using multiple stripe keys
            // reconfigureOnUpdate={false}
            // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
            // useful if you're using React-Tap-Event-Plugin
            // triggerEvent="onTouchTap"
        />
    )
}

export default StripeButton
