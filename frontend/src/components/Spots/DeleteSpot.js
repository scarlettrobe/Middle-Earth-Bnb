import { removeSpot, getCurrentUserSpots } from '../../store/spots';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import './DeleteSpot.css';

export const DeleteSpot = ({ currentSpotId }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleDelete = async () => {
        try {
            await dispatch(removeSpot(currentSpotId));
            await dispatch(getCurrentUserSpots());
            closeModal();
        } catch (error) {
            console.error('Error deleting spot:', error);
        }
    };

    return (
        <div className="delete-modal">
            <h2 className="delete-title">Confirm Delete</h2>
            <h3 className="delete-question">Are you sure you want to remove this spot from the listings?</h3>
            <div className="delete-buttons">
                <button className="delete-yes" onClick={handleDelete}>Yes</button>
                <button className="delete-no" onClick={closeModal}>No</button>
            </div>
        </div>
    );
};
