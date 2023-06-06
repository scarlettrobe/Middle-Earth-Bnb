import React from 'react';

const SpotTile = ({ spot, fetchSpots }) => {
  const handleUpdate = () => {
    // navigate to the update form
  }

  const handleDelete = async () => {
    const res = await fetch(`/api/spots/${spot.id}`, { method: 'DELETE' });
    if (res.ok) {
      // refresh the spots
      fetchSpots();
    } else {
      console.error('Failed to delete spot');
    }
  }

  return (
    <div>
      <img src={spot.image} alt={spot.location} />
      <p>{spot.location}</p>
      <p>{spot.rating}</p>
      <p>{spot.price}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default SpotTile;
