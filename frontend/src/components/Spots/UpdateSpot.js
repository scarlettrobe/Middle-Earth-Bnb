import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { getSingleSpot, modifySpot } from '../../store/spots';

export const UpdateSpot = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const spot = useSelector(state => state.spots[id]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [price, setPrice] = useState('');
  const [lat, setLat] = useState(''); // Added latitude state
  const [lng, setLng] = useState(''); // Added longitude state
  const [previewImage, setPreviewImage] = useState('');
  const [imageUrls, setImageUrls] = useState(Array(4).fill(''));

  useEffect(() => {
    dispatch(getSingleSpot(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (spot) {
      setName(spot.name);
      setCountry(spot.country);
      setStreetAddress(spot.address);
      setCity(spot.city);
      setState(spot.state);
      setDescription(spot.description);
      setPrice(spot.price);
      setLat(spot.lat); // Set latitude from the spot
      setLng(spot.lng); // Set longitude from the spot
      setPreviewImage(spot.previewImage);
      setImageUrls(spot.imageUrls || Array(4).fill(''));
    }
  }, [spot]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedSpot = await dispatch(modifySpot(id, {
      name,
      description,
      country,
      address: streetAddress,
      city,
      state,
      price,
      lat, // Include latitude in the update
      lng, // Include longitude in the update
      previewImage,
      imageUrls
    }));
    if (updatedSpot) {
      history.push(`/spots/${id}`);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update your Spot</h2>
      <div>
        <h3>Where's your place located?</h3>
        <label>
          Country
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </label>
        <label>
          Street Address
          <input
            type="text"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            required
          />
        </label>
        <label>
          City
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label>
          State
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        <label>
          Latitude
          <input
            type="text"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
          />
        </label>
        <label>
          Longitude
          <input
            type="text"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <h3>Describe your place to guests</h3>
        <textarea
          placeholder="Please write at least 30 characters"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          minLength={30}
        />
      </div>
      <div>
        <h3>Create a title for your spot</h3>
        <input
          type="text"
          placeholder="Name of your spot"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <h3>Set a base price for your spot</h3>
        <input
          type="number"
          placeholder="Price per night (USD)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div>
        <h3>Liven up your spot with photos</h3>
        <label>
          Preview Image URL
          <input
            type="text"
            value={previewImage}
            onChange={(e) => setPreviewImage(e.target.value)}
            required
          />
        </label>
        {imageUrls.map((url, i) => (
          <label key={i}>
            Image URL
            <input
              type="text"
              value={url}
              onChange={(e) => {
                const newImageUrls = [...imageUrls];
                newImageUrls[i] = e.target.value;
                setImageUrls(newImageUrls);
              }}
            />
          </label>
        ))}
      </div>
      <button type="submit">Update your Spot</button>
    </form>
  );
};
