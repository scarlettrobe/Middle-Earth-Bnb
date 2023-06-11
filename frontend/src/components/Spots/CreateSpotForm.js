import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createSpot, addSpotImages, resetCurrentUserSpots } from '../../store/spots';
import './CreateSpotForm.css';

function CreateSpotForm() {
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [lat, setLat] = useState(32.234234);
  const [lng, setLng] = useState(19.234234);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [imageUrl1, setImageUrl1] = useState('');
  const [imageUrl2, setImageUrl2] = useState('');
  const [imageUrl3, setImageUrl3] = useState('');
  const [imageUrl4, setImageUrl4] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    let errors = {};
    if (country.length < 1) errors.country = "Country is required";
    if (address.length < 1) errors.address = "Street address is required";
    if (city.length < 1) errors.city = "City is required";
    if (state.length < 1) errors.state = "State is required";
    if (description.length < 30) errors.description = "Description should be at least 30 characters";
    if (name.length < 1) errors.name = "Name of spot is required";
    if (price.length < 1) errors.price = "Price is required";
    if (previewImage.length < 1) errors.previewImage = "Preview image URL is required";
    else if (!previewImage.endsWith('.png') && !previewImage.endsWith('.jpg') && !previewImage.endsWith('.jpeg')) {
      errors.previewImage = "Preview image URL must end in .png, .jpg, or .jpeg";
    }
    if (imageUrl1.length > 0 && !imageUrl1.endsWith('.png') && !imageUrl1.endsWith('.jpg') && !imageUrl1.endsWith('.jpeg')) {
      errors.imageUrl1 = "Image URL 1 must end in .png, .jpg, or .jpeg";
    }
    if (imageUrl2.length > 0 && !imageUrl2.endsWith('.png') && !imageUrl2.endsWith('.jpg') && !imageUrl2.endsWith('.jpeg')) {
      errors.imageUrl2 = "Image URL 2 must end in .png, .jpg, or .jpeg";
    }
    if (imageUrl3.length > 0 && !imageUrl3.endsWith('.png') && !imageUrl3.endsWith('.jpg') && !imageUrl3.endsWith('.jpeg')) {
      errors.imageUrl3 = "Image URL 3 must end in .png, .jpg, or .jpeg";
    }
    if (imageUrl4.length > 0 && !imageUrl4.endsWith('.png') && !imageUrl4.endsWith('.jpg') && !imageUrl4.endsWith('.jpeg')) {
      errors.imageUrl4 = "Image URL 4 must end in .png, .jpg, or .jpeg";
    }

    setErrors(errors);
  }, [country, address, city, state, lat, lng, description, name, price, previewImage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (Object.keys(errors).length === 0) {
      const spotData = {
        country,
        address,
        city,
        state,
        lat,
        lng,
        description,
        name,
        price,
      };

      const newSpot = await dispatch(createSpot(spotData));

      if (newSpot) {
        const imageUrls = [];
        if (previewImage) imageUrls.push(previewImage);
        if (imageUrl1) imageUrls.push(imageUrl1);
        if (imageUrl2) imageUrls.push(imageUrl2);
        if (imageUrl3) imageUrls.push(imageUrl3);
        if (imageUrl4) imageUrls.push(imageUrl4);

        await dispatch(addSpotImages(newSpot.id, imageUrls));
        dispatch(resetCurrentUserSpots());
        history.push(`/spots/${newSpot.id}`);
      }
    } else {
      alert('Please correct the errors');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
            <div className="create-spot-form">
      <h1>Create a New Spot</h1>
      <h2>Where's your place located?</h2>
      <p>Guests will only get your exact address once they booked a reservation.</p>
      <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
      {submitted && errors.country && <span className="error">{errors.country}</span>}
      <input type="text" placeholder="Street Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      {submitted && errors.address && <span className="error">{errors.address}</span>}
      <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
      {submitted && errors.city && <span className="error">{errors.city}</span>}
      <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
      {submitted && errors.state && <span className="error">{errors.state}</span>}
      <input type="number" placeholder="Latitude" value={lat} onChange={(e) => setLat(e.target.value)} />
      <input type="number" placeholder="Longitude" value={lng} onChange={(e) => setLng(e.target.value)} />
      <h2>Describe your place to guests</h2>
      <p>Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.</p>
      <textarea placeholder="Please write at least 30 characters" value={description} onChange={(e) => setDescription(e.target.value)} />
      {submitted && errors.description && <span className="error">{errors.description}</span>}

      <h2>Create a title for your spot</h2>
      <p>Catch guests' attention with a spot title that highlights what makes your place special.</p>
      <input type="text" placeholder="Title of your spot" value={name} onChange={(e) => setName(e.target.value)} />
      {submitted && errors.name && <span className="error">{errors.name}</span>}

      <h2>Set a base price for your spot</h2>
      <p>Competitive pricing can help your listing stand out and rank higher in search results.</p>
      <input type="number" placeholder="Price per night (USD)" value={price} onChange={(e) => setPrice(e.target.value)} />
      {submitted && errors.price && <span className="error">{errors.price}</span>}

      <h2>Liven up your spot with photos</h2>
      <p>Submit a link to at least one photo to publish your spot.</p>
      <input type="text" placeholder="Preview Image URL" value={previewImage} onChange={(e) => setPreviewImage(e.target.value)} />
      {submitted && errors.previewImage && <span className="error">{errors.previewImage}</span>}
      <input type="text" placeholder="Image URL 1" value={imageUrl1} onChange={(e) => setImageUrl1(e.target.value)} />
      {submitted && errors.imageUrl1 && <span className="error">{errors.imageUrl1}</span>}
      <input type="text" placeholder="Image URL 2" value={imageUrl2} onChange={(e) => setImageUrl2(e.target.value)} />
      {submitted && errors.imageUrl2 && <span className="error">{errors.imageUrl2}</span>}
      <input type="text" placeholder="Image URL 3" value={imageUrl3} onChange={(e) => setImageUrl3(e.target.value)} />
      {submitted && errors.imageUrl3 && <span className="error">{errors.imageUrl3}</span>}
      <input type="text" placeholder="Image URL 4" value={imageUrl4} onChange={(e) => setImageUrl4(e.target.value)} />
      {submitted && errors.imageUrl4 && <span className="error">{errors.imageUrl4}</span>}

      <button type="submit">Create Spot</button>
      </div>
    </form>
  );
}

export default CreateSpotForm;
