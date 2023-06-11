import React from 'react';
import { useSelector } from 'react-redux';
import { useModal } from '../../context/Modal';
import { DeleteReview } from '../Reviews/DeleteReview';

import OpenModalButton from '../OpenModalButton';

export const SpotListReview = ({ review }) => {
    const user = useSelector(state => state.session.user);
    const { setModalContent } = useModal();

    const handleDeleteClick = () => {
        setModalContent( <DeleteReview reviewId={review.id} /> );
    };

    
    

    return (
        <>
            <div className='single-review'>
                <h2 className='review-names'>{review.User?.firstName}</h2>
                <p className='no-space'>{new Date(review.createdAt).toLocaleDateString()}</p>
                <div className='review'>
                    <p>{review.review}</p>
                </div>
                {user?.id === review.userId && (
                    <OpenModalButton
                        modalComponent={<DeleteReview reviewId={review.id} />}
                        buttonText="Delete"
                        onButtonClick={handleDeleteClick}
                    />
                )}
            </div>
        </>
    );
};
