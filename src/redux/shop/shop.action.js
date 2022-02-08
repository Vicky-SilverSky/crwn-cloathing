import shopTypes from './shop.types'
import { collection, getDocs, query } from 'firebase/firestore'
import { convertCollectionsSnapshotToMap, db, mapCollectionValueToHashTable } from '../../utils/firebase.utils'

export const updateCollections = (updatedCollection) => ({
    type: shopTypes.UPDATE_COLLECTION,
    payload: updatedCollection
})

export const fetchCollectionsStart = () => ({
    type: shopTypes.FETCH_COLLECTION_START,
})

export const fetchCollectionsStartAsync = () => {
    return (dispatch) => {
        dispatch(fetchCollectionsStart())
        const q = query(collection(db, "collections"))
        getDocs(q)
        .then(res => {
            const mappedValue = convertCollectionsSnapshotToMap(res)
            dispatch(fetchCollectionsSuccess(mapCollectionValueToHashTable(mappedValue)))
        })
        .catch(err => {
            console.log('Error : ', err.message)
            dispatch(fetchCollectionsFailure(err.message))
        })
    }
}

export const fetchCollectionsSuccess = (payload) => ({
    type: shopTypes.FETCH_COLLECTION_SUCCESS,
    payload
})

export const fetchCollectionsFailure = (errMessage = 'Something went wrong') => ({
    type: shopTypes.FETCH_COLLECTION_ERROR,
    payload: errMessage
})

