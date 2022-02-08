import React from "react";

import CollectionItem from '../../components/collection-item/collection-item.component'

import './collection.styles.scss'

const Collection = ({ collection: { title, items } }) => (
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
            {
                items.map((item, index) => (
                    <CollectionItem
                        key={item.id}
                        item={item}
                    />
                ))
            }
        </div>
    </div>
)

export default Collection