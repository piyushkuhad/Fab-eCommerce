import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
    //console.log(collections);
    return(
        <div className="collections-overview">
            {collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);