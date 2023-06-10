import React from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { deleteReview } from '../../store/reviews';


export const DeleteReview = ({ reviewId }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal()

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(deleteReview(reviewId)).then(closeModal)
    }


    return (
        <>
            <div className="modal-delete">
                <h2 className="delete-title">Confirm Delete</h2>
                <h3 className="delete-question">Are you sure you want to remove this review from the listings?</h3>
                <button className="red-button" type="button" onClick={handleDelete}>Yes</button>
                <button className="grey-button" type="button" onClick={(closeModal)}>No</button>
            </div>
        </>
    )
}
