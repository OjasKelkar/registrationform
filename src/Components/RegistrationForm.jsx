import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    step: 1,
    username: '',
    email: '',
    password: '',
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'profilePicture' ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@mitsgwl\.ac\.in$/.test(formData.email)) {
      newErrors.email = 'Email must be from @mitsgwl.ac.in domain';
    }

    if (formData.password.length <= 6) {
      newErrors.password = 'Password must be at least 4 characters long';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      // Send the form data to the server for registration
      const formDataToSend = new FormData();
      formDataToSend.append('username', formData.username);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('picture', formData.profilePicture);

      fetch('/auth/register', {
        method: 'POST',
        body: formDataToSend,
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the registration response here
          console.log(data);
        })
        .catch((error) => {
          // Handle errors here
          console.error(error);
        });
    }
  };

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" />
      </head>
      <div className=" `bg: url('..//LoginBack.jpeg')` bg-cover bg-center bg-contain text-black z-100">
        <div className="flex items-center justify-between p-4 bg-gray-800">

          <div><h1 className="text-teal-500 text-2xl">CAMEO</h1></div>
          <div className="social-buttons flex space-x-4">
            <a href="https://in.linkedin.com/" target="_blank" className="text-white p-5 transition duration-600 hover:scale-125">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" className="text-white p-5 transition duration-600 hover:scale-125">
              <i className="fab fa-twitter "></i>
            </a>
            <a href="https://www.instagram.com/?hl=en" target="_blank" className="text-white p-5 transition duration-600  hover:scale-125">
              <i className="fab fa-instagram "></i>
            </a>
            <a href="https://www.whatsapp.com/" target="_blank" className="text-white p-5 transition duration-600 hover:scale-125">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>


        </div>

        <div className="mx-auto flex w-full items-stretch justify-between gap-10">
          <div className="mx-auto mt-28 flex w-full flex-col items-start justify-start p-6 sm:max-w-4xl lg:px-10">
            <div className="w-full text-center">
              <h1 className="mb-3 text-5xl font-bold ">Register</h1>
              <p className="text-xs text-400">Before we post, please create your account</p>
            </div>
            <div className="my-14 flex w-full flex-col items-start justify-start gap-4">
              <div className="flex w-full items-center justify-center">
                <input
                  id="avatar-input-1"
                  hidden
                  type="file"
                  name="profilePicture"
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="avatar-input-1"
                  className="relative flex aspect-square h-24 w-24 cursor-pointer items-center justify-center overflow-visible rounded-full border-4 border-[#ae7aff] p-1"
                >
                  {/* ... (Label content remains the same) ... */}
                </label>
              </div>
              <div className="mt-10 flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Username</label>
                <input
                  placeholder="Enter a username..."
                  autoComplete="false"
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
                {errors.username && <p className="text-red-500">{errors.username}</p>}
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Email</label>
                <input
                  placeholder="Enter an email..."
                  autoComplete="false"
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Password</label>
                <input
                  placeholder="Enter a password..."
                  autoComplete="false"
                  type="password"
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Confirm Password</label>
                <input
                  placeholder="Confirm your password..."
                  autoComplete="false"
                  type="password"
                  className="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
              </div>
              <button
                className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
                onClick={handleSubmit}
              >
                Create Account
              </button>
              <p className="text-sm font-light text-white">
                Already registered?
                <span className="cursor-pointer font-bold hover:underline">Sign in to your account</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default RegistrationForm;




