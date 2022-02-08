import memoize from 'lodash.memoize';
import { createSelector } from 'reselect'

const collectionsSelector = state => state.shop

export const selectCollections = createSelector(
    [collectionsSelector],
    (shopData) => shopData
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => collections ? Object.keys(collections?.data || []).map(collectionKey => collections?.data[collectionKey]) : []
)

export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections ? collections?.data[collectionUrlParam] : null // .find(collection => collection.id === COLLECTION_MAP[collectionUrlParam])
))

export const isCollectionFetching = createSelector(
    [collectionsSelector],
    (shop) => shop.isFetching
)
