import React, { useEffect, useState } from 'react';
import SuccessReport from './SuccessReport';
import axios from 'axios';
import { BASE_URL } from '../../api/apiConfig';
import Toastify from 'toastify-js';
import { useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';

type Props = {
  setCurrentInputFunction: Function;
  setCurrentIsPopValue: Function;
};

const ReportForm = (props: Props) => {
  const [currentLocation, setCurrentLocation] = useState('Akagera National Park');
  const [sighting, setSighting] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState<{ sighting?: string; time?: string }>({});
  const navigate = useNavigate();
  const [isLoading , setIsLoading] = useState(false);

  // the states for the location fetching 
  const [latitude, setLatitude] = useState<number | undefined>(undefined);
  const [longitude, setLongitude] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const getGeolocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
      (position)=>{
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude)
        setError(null)
      },
      (error) => {
        setError(`Error; ${error.message}`)
      }      
      );
    }else {
      setError(`Geolocation is not supported by this browser`)
    }
  }

  useEffect(()=>{
    getGeolocation();
  } , [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form fields
    const validationErrors: { sighting?: string; time?: string } = {};

    if (!sighting) {
      validationErrors.sighting = 'Sighting is required';
    }

    if (!time) {
      validationErrors.time = 'Time is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    // Form is valid, proceed with form submission
    console.log('Form submitted!');
    console.log('Current Location:', currentLocation);
    console.log('Sighting:', sighting);
    console.log('Time:', time);

    // Reset the form state
    setCurrentLocation('Akagera National Park');
    setSighting('');
    setTime('');
    setErrors({});
    props.setCurrentIsPopValue(true);
    
    const timeNow = new Date();
    const timeToAdd = parseInt(time);
    const timeDetected = new Date(timeNow.getTime() + timeToAdd * 60000);

    if(latitude == null || longitude == null || latitude == undefined || longitude == undefined){
      setIsLoading(false);
      Toastify({
        text: "Failed to create an activity",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red"
      }).showToast();
    
      return
    }
    
    const body = {
      animal : sighting,
      location : currentLocation,
      time : timeDetected,
      longitude : longitude?.toString(),
      latitude : latitude?.toString()
    }

    const token = localStorage.getItem('token')
    const headers = {
        Authorization : `Bearer ${token}`
    }

    axios.post(`${BASE_URL}/activity/create` , body , {headers : headers})
    .then((res) => {
      if(res.data.status === 201){
        setIsLoading(false)
        Toastify({
          text: res.data.message,
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#22543D"
        }).showToast();
        navigate('/user/sightings')
      }

      if(res.data.status === 400){
        setIsLoading(false)
        Toastify({
          text: res.data.message,
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#ec5527"
        }).showToast();
      }

      if(res.data.status === 500){
        setIsLoading(false)
        Toastify({
          text: res.data.message,
          duration: 3000,
          gravity: "top",
          position: "right",
          backgroundColor: "#ec5527"
        }).showToast();
      }

    })
    .catch(err => {
      setIsLoading(false);
      Toastify({
        text: "Failed to create an activity",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "red"
      }).showToast();
    })

  };

  if(isLoading){
    return (
      <div className="w-[100%] h-[100%] bg-white flex flex-col justify-center items-center">
        <BallTriangle color='#22543D' />
     <p className="mt-4 text-xl font-bold text-[#22543D] animate-pulse-opacity">
  Reporting Activity ....
</p>
        </div>
    )
  }

  return (
    <div>
      <div className="text-[#22543D] font-bold text-xl text-center w-[100%]">
        <h2>Report Sighting</h2>
      </div>
      <div className="flex flex-col w-[100%] justify-center items-center">
        <form onSubmit={handleSubmit} className="p-5 flex flex-col bg-slate-200 rounded-md w-[85%] mt-8">
          <div className="p-5 flex flex-col bg-slate-200 rounded-md w-[85%] mt-8">
            <label className="text-md font-bold text-[#22543d]" htmlFor="currentLocation">
              Current Location:
            </label>
            <input
              className="bg-white text-black pl-2 text-sm p-2 rounded-md mt-2 shadow-md"
              type="text"
              id="currentLocation"
              value={currentLocation}
              readOnly
              onFocus={() => {
                props.setCurrentInputFunction(1);
              }}
            />
          </div>

          <div className="p-5 flex flex-col bg-slate-200 rounded-md w-[85%] mt-8">
            <label className="text-md font-bold text-[#22543d]" htmlFor="sighting">
              Add Sighting:
            </label>
            <select
              className={`bg-white text-black pl-2 text-sm p-2 rounded-md mt-2 shadow-md ${
                errors.sighting ? 'border-red-500' : ''
              }`}
              id="sighting"
              value={sighting}
              onChange={(e) => setSighting(e.target.value)}
              onFocus={() => {
                props.setCurrentInputFunction(2);
              }}
            >
              <option value="">Select an option</option>
              <option value="Lion">Lion</option>
              <option value="Buffalo">Buffalo</option>
              <option value="Cheetah">Cheetah</option>
              <option value="Elephant">Elephant</option>
            </select>
            {errors.sighting && <p className="text-red-500">{errors.sighting}</p>}
          </div>

          <div className="p-5 flex flex-col bg-slate-200 rounded-md w-[85%] mt-8">
            <label className="text-md font-bold text-[#22543d]" htmlFor="time">
              Time:
            </label>
            <select
              className={`bg-white text-black pl-2 text-sm p-2 rounded-md mt-2 shadow-md ${
                errors.time ? 'border-red-500' : ''
              }`}
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              onFocus={() => {
                props.setCurrentInputFunction(3);
              }}
            >
              <option value="">Select an option</option>
              <option value="1">1 minute ago</option>
              <option value="2">2 minute ago</option>
              <option value="3">3 minute ago</option>
              <option value="4">4 minute ago</option>
              <option value="5">5 minute ago</option>
            </select>
            {errors.time && <p className="text-red-500">{errors.time}</p>}
          </div>

          <div className="flex flex-row justify-end items-end w-[85%] gap-3 mt-4">
            <button className="bg-slate-200 text-[#22543d]" type="button" onClick={()=>{navigate("/user/dashboard")}}>
              Cancel
            </button>
            <button className="bg-[#22543d] text-white" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportForm;
