import { Link } from 'react-router-dom'
import "./Current.css"
import { DeleteSpot } from './DeleteSpot';

import OpenModalButton from '../OpenModalButton';

export const SpotDetails = ({ currentSpot }) => {


    return (
        <div>
            <div className='spot-card' title={currentSpot.name} key={`${currentSpot.id}`}>
                <Link className="spot-link" to={`/spots/${currentSpot.id}`}>
                    <div className='spot-image-box'>
                        <img src={currentSpot.previewImage} alt={currentSpot.name} />
                    </div>
                    <div className='spot-details' >
                        <h2 className='spot-title'>{currentSpot.name}</h2>
                        <div className='location-rating'>
                            <p>{`${currentSpot.city}, ${currentSpot.state}`}</p>
                            <p> <i className="fa-solid fa-heart"></i> {`${currentSpot.avgRating ? currentSpot.avgRating.toFixed(2) : "New"}`}</p>
                        </div>
                        <p className='spot-price'>{`$${currentSpot.price} per night`}</p>
                    </div>
                </Link>
                <Link to={`/spots/${currentSpot.id}/edit`}>
                    <button className="small-button" type='button'>Update</button>
                </Link>
                <OpenModalButton
                    modalComponent={<DeleteSpot currentSpotId={currentSpot.id} />}
                    buttonText="Delete"
                    onModalClose={() => console.log("Modal closed")}
                />
            </div>
        </div>
    )
}
