import React, { useState, useEffect } from 'react'

const Update = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1 className="font-bold underline decoration-4 text-lg text-gray-700 text-center m-10">
        UPDATE USER
      </h1>
      <form onSubmit={handleSubmit} className="mb-10">
        <div className="flex gap-5 justify-center m-5">
          <p className="font-bold mt-2">NAME:- </p>
          <input
            type="text"
            className="border rounded-md ring-2 shadow-lg shadow-slate-600 w-80 p-2"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Enter name.."
          />
        </div>
        <div className="flex gap-5 justify-center m-5">
          <p className="font-bold mt-2">AGE:- </p>
          <input
            type="number"
            className="border rounded-md ring-2 shadow-lg shadow-slate-600 w-80 p-2"
            name="age"
            value={user.age}
            onChange={handleChange}
            placeholder="Enter Age.."
          />
        </div>
        <div className="flex gap-5 justify-center m-5">
          <p className="font-bold mt-2">PHONE:- </p>
          <input
            type="number"
            className="border rounded-md ring-2 shadow-lg shadow-slate-600 w-80 p-2"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number.."
          />
        </div>
        <div className="flex gap-5 justify-center m-5">
          <p className="font-bold mt-2">EMAIL:- </p>
          <input
            type="email"
            className="border rounded-md ring-2 shadow-lg shadow-slate-600 w-80 p-2"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter Email.."
          />
        </div>
        <div className="flex gap-5 justify-center m-5">
          <p className="font-bold mt-2">Country:- </p>
          <select name="country" className="border p-2 mb-b ring rounded-md" onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
      </form>
      <button className="ml-[50%] ring ring-opacity-25 ring-neutral-600 mb-2 p-2 rounded-md bg-blue-500 hover:bg-blue-300 w-20 text-lg cursor-pointer font-bold">Update</button>
    </div>
  );
}

export default Update