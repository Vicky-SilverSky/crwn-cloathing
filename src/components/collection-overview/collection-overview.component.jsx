import React from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({ collections }) => (
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

export default CollectionOverview
