import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const AddBlinds = () => {
  // 1. Form state variables
  const [title, setTitle] = useState('Light Out');
  const [category, setCategory] = useState('Blinds');
  const [description, setDescription] = useState('Asolute Peak product.');

  const navigate = useNavigate();
  
  // Features tag array state
  const [features, setFeatures] = useState(['Waterproof', 'Wipeable']);
  const [featureInput, setFeatureInput] = useState('');

  // Image file & preview state
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Status & Loading states
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // 2. Add dynamic feature badge
  const handleAddFeature = (e) => {
    e.preventDefault();
    if (featureInput.trim() && !features.includes(featureInput.trim())) {
      setFeatures([...features, featureInput.trim()]);
      setFeatureInput('');
    }
  };

  // Remove feature badge
  const handleRemoveFeature = (featureToRemove) => {
    setFeatures(features.filter((f) => f !== featureToRemove));
  };

  // Handle image selection and live preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // 3. Submit Form Data to Express API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    if (!imageFile) {
      setMessage({ type: 'error', text: 'Please select an image file.' });
      setLoading(false);
      return;
    }

    try {
      // Create FormData instance
      const formData = new FormData();
      formData.append('title', title);
      formData.append('category', category);
      formData.append('description', description);
      
      // Convert features array to JSON string for multipart compatibility
      formData.append('features', JSON.stringify(features));
      
      // Append raw image file
      formData.append('image', imageFile);

      // Send POST request
      const response = await axios.post('https://success-interior-design-1.onrender.com/api/api/products', formData);

      setMessage({ type: 'success', text: 'Product created successfully!' });
      
      // Reset form
      setTitle('');
      setDescription('');
      setFeatures([]);
      setImageFile(null);
      setImagePreview(null);
      navigate("/")
    } catch (error) {
      console.error('Upload Error:', error);
      setMessage({
        type: 'error',
        text: error.response?.data?.message || 'Failed to create product.',
        stack:error.stack
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-[#031853] text-white rounded-2xl shadow-xl border border-white/10">
      <h2 className="text-2xl font-bold text-[#FFBD00] mb-6">Add New Product</h2>

      {message.text && (
        <div
          className={`p-3 mb-4 text-sm rounded-lg ${
            message.type === 'success'
              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Title</label>
          <input
            type="text"
            required
            placeholder="e.g., Faux Wood Venetian"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFBD00]"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-[#031853] border border-white/20 text-white focus:outline-none focus:border-[#FFBD00]"
          >
            "Office", "Kitchen", "Home", "Toilet"
            <option value="Office">Office</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Home">Home</option>
            <option value="Toilet">Toilet</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            required
            rows="3"
            placeholder="Moisture-resistant slats with a refined painted finish..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFBD00]"
          ></textarea>
        </div>

        {/* Features Tag Input */}
        <div>
          <label className="block text-sm font-medium mb-1">Features (Tags)</label>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="e.g., UV Protection"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#FFBD00]"
            />
            <button
              type="button"
              onClick={handleAddFeature}
              className="px-4 py-2 bg-[#FFBD00] text-[#031853] font-semibold rounded-lg hover:bg-yellow-400 transition"
            >
              Add
            </button>
          </div>

          {/* Render Active Feature Badges */}
          <div className="flex flex-wrap gap-2">
            {features.map((feature, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20"
              >
                {feature}
                <button
                  type="button"
                  onClick={() => handleRemoveFeature(feature)}
                  className="text-red-400 hover:text-red-300 font-bold text-sm"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Image File Upload & Preview */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Image</label>
          <input
            type="file"
            accept="image/*"
            required
            onChange={handleImageChange}
            className="w-full text-sm cursor-pointer text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#FFBD00] file:text-[#031853] hover:file:bg-yellow-400 cursor-pointer"
          />

          {imagePreview && (
            <div className="mt-3">
              <p className="text-xs text-gray-400 mb-1">Image Preview:</p>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-24 object-cover rounded-lg border border-white/20"
              />
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 cursor-pointer bg-[#FFBD00] text-[#031853] font-bold rounded-lg hover:bg-yellow-400 transition disabled:opacity-50"
        >
          {loading ? 'Uploading Product...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddBlinds;