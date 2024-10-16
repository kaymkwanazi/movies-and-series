import React, {useState} from 'react'
import { Navbar } from './Navbar';
import Movies from '../../../public/Database/movies.json'
import Series from '../../../public/Database/series.json'

export const Addmovie = () => {
  
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        country: '',
        year: '',
        type: 'movie', // Default type is movie
        file: null,  // For file upload
      });
    
      // Handle form input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handle file input change
      const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
      };
    
      // Handle form submission
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        // You can submit the formData to your API here
        // Example with fetch:
        
        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("country", formData.country);
        formDataToSend.append("year", formData.year);
        formDataToSend.append("type", formData.type);
        formDataToSend.append("file", formData.file);
        
        fetch(Movies, {
          method: 'POST',
          body: formDataToSend,
        }).then((response) => response.json());
        
      };
    
      return (
        <>
        <Navbar title= "Add movie/series" />
        <div className="flex justify-center items-center h-screen">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-1/2 flex space-x-4">
            {/* Left section for file input */}
            <div className="w-1/3 flex flex-col justify-center items-center bg-gray-200 p-4">
              <label htmlFor="file" className="cursor-pointer">
                <div className="bg-gray-400 text-center p-3 mb-20 rounded-md">
                  {formData.file ? formData.file.name : 'Choose File'}
                </div>
              </label>
              <input 
                type="file"
                id="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
    
            {/* Right section for form inputs */}
            <div className="w-2/3">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Movie/ Series Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Movie/ Series Name"
                  className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
    
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Movie/ Series Description"
                  className="mt-1 block pl-2 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
    
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input 
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Search Country"
                  className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
    
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Year</label>
                <input 
                  type="date"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="mt-1 pl-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
    
              <div className="flex mb-4 space-x-4">
                <div>
                  <input 
                    type="radio"
                    name="type"
                    value="movie"
                    checked={formData.type === 'movie'}
                    onChange={handleChange}
                    className="focus:ring-indigo-500"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-700">Movie</label>
                </div>
    
                <div>
                  <input 
                    type="radio"
                    name="type"
                    value="series"
                    checked={formData.type === 'series'}
                    onChange={handleChange}
                    className="focus:ring-indigo-500"
                  />
                  <label className="ml-2 text-sm font-medium text-gray-700">Series</label>
                </div>
              </div>
    
              <button 
                type="submit"
                className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-full w-full hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
    </>
     );
};
