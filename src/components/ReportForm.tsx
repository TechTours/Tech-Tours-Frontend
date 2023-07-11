import React, { useState } from 'react';
import SuccessReport from './SuccessReport';

type Props = {
  setCurrentInputFunction: Function;
  setCurrentIsPopValue: Function;
};

const ReportForm = (props: Props) => {
  const [currentLocation, setCurrentLocation] = useState('Akagera National Park');
  const [sighting, setSighting] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState<{ sighting?: string; time?: string }>({});

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
  };

  return (
    <div>
      <div className="text-[#22543D] font-bold text-xl text-center w-[100%]">
        <h2>REPORT SIGHTING</h2>
      </div>
      <div className="flex flex-col w-[100%] justify-center items-center">
        <form onSubmit={handleSubmit} className="p-5 flex flex-col bg-slate-200 rounded-md w-[85%] mt-8">
          <div className="p-5 flex flex-col bg-slate-200 rounded-md w-[85%] mt-8">
            <label className="text-md font-bold text-[#22543d]" htmlFor="currentLocation">
              CURRENT LOCATION:
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
              ADD SIGHTING:
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
              TIME:
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
              <option value="1 minute ago">1 minute ago</option>
              <option value="2 minute ago">2 minute ago</option>
              <option value="3 minute ago">3 minute ago</option>
              <option value="4 minute ago">4 minute ago</option>
              <option value="5 minute ago">5 minute ago</option>
            </select>
            {errors.time && <p className="text-red-500">{errors.time}</p>}
          </div>

          <div className="flex flex-row justify-end items-end w-[85%] gap-3 mt-4">
            <button className="bg-slate-200 text-[#22543d]" type="button">
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
