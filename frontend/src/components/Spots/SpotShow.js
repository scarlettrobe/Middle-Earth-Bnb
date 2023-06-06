import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSingleSpot } from '../../store/spots';
import * as sessionActions from '../../store/session';
import "./SpotShow.css"
import { getAllReviews } from '../../store/reviews';
import { SpotShowReview } from './SpotShowReview';

export const SpotShow = () => {
    const { spotId } = useParams();
    const spot = useSelector(state => state.spots[spotId])
    const review = useSelector(state => state.review)
    const user = useSelector(state => state.session.user);
    let reviewArray;
    if (review) {
        reviewArray = Object.values(review)
    }
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        dispatch(getSingleSpot(spotId))
            .then(() => setLoading(false))
            .then(() => dispatch(getAllReviews(spotId)));
    }, [dispatch, spotId]);

    if (loading) {
        return <div className='loading'>Loading...</div>
    }

    if (!spot) {
        return null
    }

    return (
        <>
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
                    <div className='information-spot'>
                        <div className='top-info'>
                            <div className='host-info'>
                                <h2>Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</h2>
                                <p>{spot.description}</p>
                            </div>
                            <div className='reserve-area'>
                                <div className='top-area-reserve'>
                                    <h2>{`$${spot.price}`} <span className='small-text'>night</span></h2>
                                    <div className='top-right-reserve'>
                                        <div className='rating'>
                                        <i class="fa-solid fa-heart"></i>
                                            <p>{`${spot.avgStarRating.toFixed(2)} -`}</p>
                                        </div>
                                        <p>{`${spot.numReviews} reviews`}</p>
                                    </div>
                                </div>
                                <button className="reserve-button" type='button' onClick={(e) => { alert('Feature coming soon') }}>Reserve</button>
                            </div>
                        </div>

                    </div>
                    <div className='reviews'>
                        <h2>Reviews</h2>
                        {user ? (
                            <>
                                <div className='top-reviews'>
                                    <div className='rating'>
                                    <i class="fa-solid fa-heart"></i>
                                        <h2>{`${spot.avgStarRating.toFixed(2)} -`}</h2>
                                    </div>
                                    <h2>{`${spot.numReviews} reviews`}</h2>
                                </div>
                                <button className='review-button' type='button'>Post Your Review</button>
                            </>


                        ) : (
                            <>
                                <div className='top-reviews'>
                                    <div className='rating'>
                                    <i class="fa-solid fa-heart"></i>
                                        <h2>{`${spot.avgStarRating.toFixed(2)}-`}</h2>
                                    </div>
                                    <h2>{`${spot.numReviews} reviews`}</h2>
                                </div>
                            </>
                        )}

                    </div>
                    <div>

                        {reviewArray.map((review) => {
                            return (
                                <SpotShowReview review={review} />

                            )
                        })}
                    </div>

                </div>
                <div>

                </div>
            </div >
            <div>

            </div>
        </>
    )
}
