import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCurrentUserSpots } from '../../store/spots';
import { SpotDetails } from './SpotDetails';
import { useHistory } from 'react-router-dom';
import "./Current.css";

export const CurrentSpots = () => {
    const user = useSelector(state => state.session.user);
    const currentSpotsObj = useSelector(state => state.spots.currentUserSpots);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            history.push('/');
        } else {
            setLoading(true);
            dispatch(getCurrentUserSpots())
                .then(() => {
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                })
                .catch((err) => console.error(err));
        }
    }, [dispatch, user, history]);

    if (loading) {
        return <div className='loading'>Loading...</div>;
    }

    let currentSpots = [];
    if (currentSpotsObj) {
        currentSpots = Object.values(currentSpotsObj);
    }

    return (
        <>
            <h2 className="manage-title">Manage Spots</h2>
            <button className="create-spot-button" onClick={() => history.push('/spots/new')}>Create a New Spot</button>
            <div className='spots-body'>
                {currentSpots.map((currentSpot) => (
                    <SpotDetails currentSpot={currentSpot} key={currentSpot.id} />
                ))}
            </div>
        </>
    );
};
