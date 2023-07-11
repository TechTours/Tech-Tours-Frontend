import React, { useState } from 'react';

const CreateUserComponent = () => {
  const [configurationId, setConfigurationId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState<{ configurationId?: string; username?: string; password?: string; email?: string; phoneNumber?: string }>(
    {}
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form fields
    const validationErrors: {
      configurationId?: string;
      username?: string;
      password?: string;
      email?: string;
      phoneNumber?: string;
    } = {};

    if (!configurationId) {
      validationErrors.configurationId = 'Configuration ID is required';
    }

    if (!username) {
      validationErrors.username = 'Username is required';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    }

    if (!phoneNumber) {
      validationErrors.phoneNumber = 'Phone Number is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form is valid, proceed with form submission
    console.log('Form submitted!');
    console.log('Configuration ID:', configurationId);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);

    // Reset the form state
    setConfigurationId('');
    setUsername('');
    setPassword('');
    setEmail('');
    setPhoneNumber('');
    setErrors({});
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-start">
      <div className="w-[100%] h-[10%] flex flex-row justify-center items-start">
        <div className="w-[92%] flex flex-row justify-between items-center">
          <div className="p-2 font-bold text-xl text-[#22543D]">Create New User</div>
        </div>
      </div>

      {/* the second part start  */}
      <div className="w-[100%] h-[100%] flex flex-col justify-center items-start mt-5">
        {/* the first part start  */}
        <div className="w-[100%] h-[100%] flex flex-row justify-center items-start">
          <div className="w-[92%] flex flex-row justify-center items-center rounded-lg">
            <form className="w-[100%] h-[100%] flex flex-col justify-center items-start" onSubmit={handleSubmit}>
              <div className="w-[100%] flex flex-col mb-5 space-y-2">
                <label className="text-black" htmlFor="configurationId">
                  Configuration ID
                </label>
                <input
                  type="text"
                  id="configurationId"
                  className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                    errors.configurationId ? 'border-red-500' : ''
                  }`}
                  value={configurationId}
                  onChange={(e) => setConfigurationId(e.target.value)}
                />
                {errors.configurationId && <p className="text-red-500">{errors.configurationId}</p>}
              </div>

              <div className="w-[100%] flex flex-col mb-5 space-y-2">
                <label className="text-black" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                    errors.username ? 'border-red-500' : ''
                  }`}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <p className="text-red-500">{errors.username}</p>}
              </div>

              <div className="w-[100%] flex flex-col mb-5 space-y-2">
                <label className="text-black" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                    errors.password ? 'border-red-500' : ''
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>

              <div className="w-[100%] flex flex-col mb-5 space-y-2">
                <label className="text-black" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>

              <div className="w-[100%] flex flex-col mb-5 space-y-2">
                <label className="text-black" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className={`border-2xl w-[40%] h-10 rounded-md border-2 border-gray-300 bg-white pl-2 text-black ${
                    errors.phoneNumber ? 'border-red-500' : ''
                  }`}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
              </div>

              <div className="w-[40%] flex flex-row justify-between mb-5 gap-5">
                <button className="bg-[#fffff] text-[#22543D] w-[40%] text-center font-bold border-2 border-[#22543D]">
                  Back
                </button>
                <button className="bg-[#22543D] text-white w-[40%] text-center" type="submit">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* the second part end  */}
    </div>
  );
};

export default CreateUserComponent;
