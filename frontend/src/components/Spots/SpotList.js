import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSingleSpot } from '../../store/spots';
import { getAllReviews } from '../../store/reviews';
import { SpotListReview } from './SpotListReview';
import * as sessionActions from '../../store/session';
import "./SpotList.css"

export const SpotList = () => {
    const { spotId } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const spot = useSelector(state => state.spots[spotId])
    const review = useSelector(state => state.review)
    const user = useSelector(state => state.session.user);

    // This hook runs when the component is mounted and whenever dispatch or spotId changes

    useEffect(() => {
        (async () => {
            await dispatch(getSingleSpot(spotId));
            await dispatch(getAllReviews(spotId));
            setLoading(false);
        })(); 
    }, [dispatch, spotId]);

    if (loading) {
        return <div className='loading'>Loading...</div>
    }

    if (!spot) {
        return null
    }

    const reviewArray = review ? Object.values(review) : [];

    return (
        <div className='single-spot-body'>
            <div className='wrapper'>
                <h1>{spot?.name}</h1>
                <h2>{spot?.city}, {spot?.state}, {spot?.country}</h2>
                <div className='center'>
                    <div className='images'>
                        <img id="image" src={spot?.SpotImages[0].url}></img>
                        <div className='grid-images'>
                            <img className="small-image" src={spot?.SpotImages[1].url}></img>
                        </div>
                    </div>
                </div>
                {}
                {reviewArray.map((review, index) => <SpotListReview key={index} review={review} />)}
            </div>
        </div>
    );
}
