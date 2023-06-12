import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Spot.css"


export const SpotIndexItem = ({ spot }) => {
    const dispatch = useDispatch();

    return (
        <div className='image-card' title={spot.name}>
            <Link className="link" to={`/spots/${spot.id}`}>
                <div className='image-box'>
                    <img src={spot.previewImage} />
                </div>
                <div className='spot-info'>
                    <h2 className='title-spots'>{spot.name}</h2>
                    <div className='price-stars'>
                        <p>{`${spot.city}, ${spot.state}`}</p>
                        <p> <i className="fa-solid fa-heart"></i> {`${spot.avgRating ? Number(spot.avgRating).toFixed(1) : "New"}`}</p>

                    </div>
                    <p className='price-spots'>{`$${spot.price} night`}</p>
                </div>
                <div className='tooltip'><span className="tooltiptext">{spot.name}</span></div>
            </Link>
        </div>
    )

}
