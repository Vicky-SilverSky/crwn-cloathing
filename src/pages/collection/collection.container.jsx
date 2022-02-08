import { compose } from 'redux'
import { connect } from 'react-redux'
import Collection from './collection.component'
import { selectCollection } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

const CollectionPageContainer = compose(connect(mapStateToProps))(WithSpinner(Collection))

export default CollectionPageContainer