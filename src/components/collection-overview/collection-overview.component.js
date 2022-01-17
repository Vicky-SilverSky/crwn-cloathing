import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { selectCollections, selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections, history, match, ...otherProps }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...otherCollectionProp }) => (
                <CollectionPreview
                    key={id}
                    {...otherCollectionProp}
                />
            ))
        }
    </div>
);
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default withRouter(connect(mapStateToProps)(CollectionOverview))
