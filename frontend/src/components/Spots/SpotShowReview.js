import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import "./SpotShow.css"

//here we need to get the users with the review.userId

export const SpotShowReview = ({ review }) => {
    return (
        <>
            <div className='single-review'>
                <h2 className='review-names'>{review.User.firstName}</h2>
                <p className='no-space'>{new Date(review.createdAt).toLocaleDateString()}</p>
                <div className='review'>
                    <p>{review.review}</p>
                </div>
            </div>
        </>
    )
}
