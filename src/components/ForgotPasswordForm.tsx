import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ email?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the email field
    const validationErrors: { email?: string } = {};

    if (!email) {
      validationErrors.email = 'Email is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Form is valid, proceed with form submission
    console.log('Form submitted!');
    console.log('Email:', email);

    // Reset the form state
    setEmail('');
    setErrors({});
  };

  return (
    <div className="w-[100%] h-[100%] bg-[#E5E5E5] flex flex-col justify-center items-center">
      <div className="w-[70%] mb-2">
        <p className="text-3xl font-bold text-[#22543D] mb-2">Forgot Password?</p>
        <p className="text-[#22543D]">
          Please enter your previous email and we'll send an email with a link where you can change your password
        </p>
      </div>
      <div className="w-[70%] mt-5 mb-2 flex flex-row">
        <div className="w-[85%] flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="w-[100%] flex flex-col mb-5">
            <div className="w-[100%] flex flex-col mb-5">
              <label className="text-black mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                className={`border-2xl w-[90%] h-10 rounded-md border-2 border-gray-300 bg-white text-black pl-2 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>

            <button className="bg-[#22543D] text-white w-[90%] text-center" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="w-[70%] flex flex-col justify-center">
        <p className="text-center w-[78%] text-[#22543D]">
          Or you can <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
