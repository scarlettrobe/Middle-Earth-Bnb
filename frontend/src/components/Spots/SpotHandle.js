import React, { useState, useEffect } from "react";
import SpotHandle from './SpotHandle';

const SpotManage = () => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    fetchSpots();
  }, []);

  const fetchSpots = async () => {
    // fetch the spots from the backend
    const res = await fetch('/api/spots');
    const data = await res.json();
    setSpots(data);
  }

  return (
    <div>
      <h1>Manage Spots</h1>
      {spots.length > 0 
        ? spots.map(spot => <SpotHandle key={spot.id} spot={spot} fetchSpots={fetchSpots} />)
        : <p>No spots found. <a href="/new-spot">Create a New Spot</a></p>}
    </div>
  );
}

export default SpotManage;
