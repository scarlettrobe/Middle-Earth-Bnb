import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSingleSpot } from '../../store/spots';
import { getAllReviews } from '../../store/reviews';
import { SpotListReview } from './SpotListReview';
import "./SpotList.css";

export const SpotList = () => {
  const { spotId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const spot = useSelector(state => state.spots[spotId]);
  const review = useSelector(state => state.review);
  const user = useSelector(state => state.session.user);

  // This hook runs when the component is mounted and whenever dispatch or spotId changes
  useEffect(() => {
    (async () => {
      await dispatch(getSingleSpot(spotId));
      await dispatch(getAllReviews(spotId));
      setLoading(false);
    })();
  }, [dispatch, spotId]);

  const handleReserveClick = () => {
    alert('Feature coming soon');
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!spot) {
    return null;
  }

  const reviewArray = review ? Object.values(review) : [];

  return (
    <div className="single-spot-body">
      <div className="wrapper">
        <h1>{spot.name}</h1>
        <h2>
          {spot.city}, {spot.state}, {spot.country}
        </h2>
        <div className="center">
          <div className="images">
            <img id="image" src={spot.SpotImages[0]?.url} alt="Spot" />
            <div className="grid-images">
              <img className="small-image" src={spot.SpotImages[1]?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'} alt="Spot"/>
              <img className="small-image" src={spot.SpotImages[2]?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'} alt="Spot"/>
              <img className="small-image" src={spot.SpotImages[3]?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'} alt="Spot"/>
              <img className="small-image" src={spot.SpotImages[4]?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019'} alt="Spot"/>

            </div>
          </div>
        </div>
        <div className="information-spot">
          <div className="top-info">
            <div className="host-info">
              <h2>Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</h2>
              <p>{spot.description}</p>
            </div>
            <div className="reserve-area">
              <div className="top-area-reserve">
                <h2>{`$${spot.price}`} <span className="small-text">night</span></h2>
                <div className="top-right-reserve">
                  <div className="rating">
                    <i className="fa-solid fa-heart"></i>
                    <p>{`${spot.avgStarRating.toFixed(2)} -`}</p>
                  </div>
                  <p>{`${spot.numReviews} reviews`}</p>
                </div>
              </div>
              <button className="reserve-button" type="button" onClick={handleReserveClick}>Reserve</button>
            </div>
          </div>
        </div>
        <div className="reviews">
          <h2>Reviews</h2>
          {user ? (
            <>
              <div className="top-reviews">
                <div className="rating">
                  <i className="fa-solid fa-heart"></i>
                  <h2>{`${spot.avgStarRating.toFixed(2)} -`}</h2>
                </div>
                <h2>{`${spot.numReviews} reviews`}</h2>
              </div>
              <button className="review-button" type="button">Post Your Review</button>
            </>
          ) : (
            <>
              <div className="top-reviews">
                <div className="rating">
                  <i className="fa-solid fa-heart"></i>
                  <h2>{`${spot.avgStarRating.toFixed(2)} -`}</h2>
                </div>
                <h2>{`${spot.numReviews} reviews`}</h2>
              </div>
            </>
          )}
          {reviewArray.map((review, idx) => (
            <SpotListReview key={idx} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};
