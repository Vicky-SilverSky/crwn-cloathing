import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionOverview from './collection-overview.component'

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

const CollectionOverviewContainer = compose(connect(mapStateToProps))(WithSpinner(CollectionOverview))

export default CollectionOverviewContainer