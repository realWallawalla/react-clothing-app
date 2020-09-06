import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
import { connect}  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { WithSpinner } from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinnger = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinnger = WithSpinner(CollectionPage);


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync }  = this.props;

        fetchCollectionsStartAsync();
    }
    
    render() {
        const { match, isCollectionFetching, isCollectionsLoaded } = this.props;

          return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`}
                    render={(props) => (
                        <CollectionsOverviewWithSpinnger 
                            isLoading={isCollectionFetching}
                            {...props}/> )} />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    render={(props) => (
                        <CollectionPageWithSpinnger 
                            isLoading={!isCollectionsLoaded}
                            {...props} />)} />
            </div>);
        }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})     
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(ShopPage);