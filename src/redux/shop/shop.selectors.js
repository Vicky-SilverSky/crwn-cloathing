import memoize from 'lodash.memoize';
import { createSelector } from 'reselect'

const COLLECTION_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

const collectionsSelector = state => state.sections

export const selectCollections = createSelector(
    [collectionsSelector],
    (sectionsData) => sectionsData
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) => Object.keys(collections).map(collectionKey => collections[collectionKey])
)

export const selectCollection = memoize(collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam] // .find(collection => collection.id === COLLECTION_MAP[collectionUrlParam])
))