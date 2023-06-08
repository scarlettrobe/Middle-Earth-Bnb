import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSpot, createSpotImage, resetCurrentUserSpots } from '../../store/spots';

export const CreateSpot = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [country, setCountry] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [previewImageUrl, setPreviewImageUrl] = useState('');
  const [imageUrls, setImageUrls] = useState(['', '', '', '', '']);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!country.trim()) {
      errors.country = 'Country is required';
    }

    if (!streetAddress.trim()) {
      errors.streetAddress = 'Street Address is required';
    }

    if (!city.trim()) {
      errors.city = 'City is required';
    }

    if (!state.trim()) {
      errors.state = 'State is required';
    }

    if (!title.trim()) {
      errors.title = 'Title is required';
    }

    if (!description.trim() || description.length < 30) {
      errors.description = 'Description needs 30 or more characters';
    }

    if (!price.trim()) {
      errors.price = 'Price per night is required';
    }

    if (!previewImageUrl.trim()) {
      errors.previewImageUrl = 'Preview Image URL is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const spot = {
      country,
      streetAddress,
      city,
      state,
      title,
      description,
      price,
    };

    const createdSpot = await dispatch(createSpot(spot));

    if (createdSpot) {
      const imagePayloads = [previewImageUrl, ...imageUrls].map(
        (imageUrl, index) => ({
          url: imageUrl,
          spotId: createdSpot.id,
          preview: index === 0,
        })
      );

      await Promise.all(
        imagePayloads.map((imagePayload) =>
          dispatch(createSpotImage(imagePayload))
        )
      );

      await dispatch(resetCurrentUserSpots());
      history.push(`/spots/${createdSpot.id}`);
    }
  };

  const handleImageChange = (index, imageUrl) => {
    const updatedImageUrls = [...imageUrls];
    updatedImageUrls[index] = imageUrl;
    setImageUrls(updatedImageUrls);
  };

  return (
    <div>
      <h2>Create a New Spot</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Where's your place located?</h3>
          <p>Guests will only get your exact address once they book a reservation.</p>
          <div>
            <label>Country</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            {errors.country && <span>{errors.country}</span>}
          </div>
          <div>
            <label>Street Address</label>
            <input
              type="text"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              required
            />
            {errors.streetAddress && <span>{errors.streetAddress}</span>}
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            {errors.city && <span>{errors.city}</span>}
          </div>
          <div>
            <label>State</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
            {errors.state && <span>{errors.state}</span>}
          </div>
        </div>
        <div>
          <h3>Describe your place to guests</h3>
          <p>
            Mention the best features of your space, any special amenities like fast Wi-Fi or parking, and what you love about the neighborhood.
          </p>
          <div>
            <label>Create a title for your spot</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Name of your spot"
            />
            {errors.title && <span>{errors.title}</span>}
          </div>
          <div>
            <label>Set a base price for your spot</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              placeholder="Price per night (USD)"
            />
            {errors.price && <span>{errors.price}</span>}
          </div>
        </div>
        <div>
          <h3>Liven up your spot with photos</h3>
          <p>Submit a link to at least one photo to publish your spot.</p>
          <div>
            <label>Preview Image URL</label>
            <input
              type="text"
              value={previewImageUrl}
              onChange={(e) => setPreviewImageUrl(e.target.value)}
              required
              placeholder="Preview Image URL"
            />
            {errors.previewImageUrl && <span>{errors.previewImageUrl}</span>}
          </div>
          {[1, 2, 3, 4].map((index) => (
            <div key={index}>
              <label>Image URL {index + 1}</label>
              <input
                type="text"
                value={imageUrls[index]}
                onChange={(e) => handleImageChange(index, e.target.value)}
                placeholder="Image URL"
              />
            </div>
          ))}
        </div>
        <button type="submit">Create Spot</button>
      </form>
    </div>
  );
};
