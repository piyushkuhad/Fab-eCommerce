import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// import CollectionPageContainer from '../collection-page/CollectionPage.container.jsx';
// import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container';

import './ShopPage.scss';
import { fetchCollectionsStart } from '../../redux/shop/shopActions';
import Spinner from '../../components/spinner/Spinner.component';

const CollectionPageContainer = lazy(() =>
  import('../collection-page/CollectionPage.container.jsx')
);
const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/CollectionsOverview.container')
);

const ShopPage = ({ match, fetchCollectionsStart }) => {
  //console.log(match.path);

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
