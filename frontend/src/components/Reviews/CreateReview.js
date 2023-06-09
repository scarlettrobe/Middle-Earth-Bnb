import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {getSingleSpot } from "../../store/spots";
import { createReview } from "../../store/reviews";
import { useModal } from "../../context/Modal";

const CreateReview = ({ spot, user }) => {
  const [stars, setstars] = useState(1);
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState({});
  const [activeRating, setActiveRating] = useState(1);
  const [serverError, setServerError] = useState(null);

  const { closeModal } = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    let errors = {};
    if (stars < 1) errors.stars = "stars can't be empty";
    if (review.length < 10) errors.review = "Review must be at least 10 characters long";

    setErrors(errors);
  }, [review, stars]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(errors).length > 0) {
      alert("Please fix the errors you have");

    } else {
      let spotId = spot.id;
      let reviews = {
        stars,
        review,
      };

      await dispatch(createReview(reviews, spotId, user))
        .then(closeModal)
        .then(() => { dispatch(getSingleSpot(spotId)); })
        .then(() => {
          setstars(1);
          setReview("");
          setErrors({});
          setActiveRating(1);
        })
        .catch(error => {
          setServerError(error.message);
        });
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h2 className="review-title">How was your stay?</h2>
      {serverError && <p className="server-error">{serverError}</p>}
      <label className="review-label">
        Review:
        <textarea
          placeholder="Leave your review here..."
          className="review-input long-text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </label>
      <label className="review-label">
        stars:
        <div className="rating-input">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={activeRating > index ? "filled" : "empty"}
              onMouseEnter={() => setActiveRating(index + 1)}
              onMouseLeave={() => setActiveRating(stars)}
              onClick={() => setstars(index + 1)}
            >
              {activeRating > index ? (
                <i className="fa-solid fa-heart fa-2xl filled"></i>
              ) : (
                <i className="fa-regular fa-heart fa-2xl"></i>
              )}
            </div>
          ))}
        </div>
      </label>
      <button disabled={Object.values(errors).length > 0} className="review-button" type="submit">Submit Your Review</button>
    </form>
  );
};

export default CreateReview;
