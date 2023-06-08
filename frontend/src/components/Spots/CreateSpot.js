import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSpot } from '../../store/spots';

const CreateSpot = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState(['']);
  const [errors, setErrors] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const validate = () => {
    const validationErrors = [];
    if (!name) validationErrors.push('Name of your spot is required');
    if (description.length < 30) validationErrors.push('Description needs 30 or more characters');
    if (!address) validationErrors.push('Street Address is required');
    if (!city) validationErrors.push('City is required');
    if (!state) validationErrors.push('State is required');
    if (!country) validationErrors.push('Country is required');
    if (!price) validationErrors.push('Price per night is required');
    if (!imageUrl[0]) validationErrors.push('Preview Image URL is required');
    return validationErrors;
  };

  const updateImage = (e, index) => {
    const newImages = [...imageUrl];
    newImages[index] = e.target.value;
    setImageUrl(newImages);
  };

  const addImageField = () => {
    setImageUrl([...imageUrl, '']);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors([]);
      const payload = {
        name,
        description,
        address,
        city,
        state,
        country,
        price,
        images: imageUrl,
      };
      let createdSpot = await dispatch(createSpot(payload));
      if (createdSpot) {
        history.push(`/spots/${createdSpot.id}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ...inputs for name, description, address, city, state, country, price... */}
      {imageUrl.map((url, i) => (
        <input
          key={i}
          type="text"
          placeholder={i === 0 ? 'Preview Image URL' : 'Image URL'}
          value={url}
          onChange={(e) => updateImage(e, i)}
        />
      ))}
      <button type="button" onClick={addImageField}>Add another image</button>
      <button type="submit">Create Spot</button>
      <div>
        {errors.map((error, idx) => <div key={idx}>{error}</div>)}
      </div>
    </form>
  );
};

export default CreateSpot;
