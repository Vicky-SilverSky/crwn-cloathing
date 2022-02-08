import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync, updateCollections } from '../../redux/shop/shop.action'
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { isCollectionFetching } from "../../redux/shop/shop.selectors";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from '../collection/collection.container'

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeCollectionsSnapshotHandler = null;

    async componentDidMount() {
        const { fetchCollectionsStart } = this.props
        fetchCollectionsStart();
    }

    render() {
        const { match, isCollectionFetching } = this.props
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId/`}
                    component={CollectionPageContainer}
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching
})

const mapDispatchToProps = (dispatch) => ({
    updateCollection: value => dispatch(updateCollections(value)),
    fetchCollectionsStart: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
