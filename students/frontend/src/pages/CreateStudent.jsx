import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    rollNum: "",
    age: "",
    class: "",
    phoneNum: "",
    emailId: "",
    branch: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: student.name,
      rollNumber: student.rollNum,
      age: student.age,
      class: student.class,
      phoneNumber: student.phoneNum,
      emailId: student.emailId,
      branch: student.branch,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/students", newStudent)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl underline text-center my-5">
        CREATE STUDENT
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h1 className="ml-5 my-2 font-semibold">Enter Name: </h1>
        <input
          className="p-2 ml-5 ring-1 rounded-md w-[50%]"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={student.name}
          onChange={handleChange}
        />
        <h1 className="ml-5 my-2 font-semibold">Enter Roll No. : </h1>
        <input
          className="p-2 ml-5 ring-1 rounded-md w-[50%]"
          type="number"
          name="rollNum"
          placeholder="Enter your RollNo."
          value={student.rollNum}
          onChange={handleChange}
        />
        <h1 className="ml-5 my-2 font-semibold">Enter Age: </h1>
        <input
          className="p-2 ml-5 ring-1 rounded-md w-[50%]"
          type="number"
          name="age"
          placeholder="Enter your age"
          value={student.age}
          onChange={handleChange}
        />
        <h1 className="ml-5 my-2 font-semibold">Enter Class: </h1>
        <input
          className="p-2 ml-5 ring-1 rounded-md w-[50%]"
          type="text"
          name="class"
          placeholder="Enter your class"
          value={student.class}
          onChange={handleChange}
        />
        <h1 className="ml-5 my-2 font-semibold">Enter Phone Number: </h1>
        <input
          className="p-2 ml-5 ring-1 rounded-md w-[50%]"
          type="phone"
          name="phoneNum"
          placeholder="Enter your phone No."
          value={student.phoneNum}
          onChange={handleChange}
        />
        <h1 className="ml-5 my-2 font-semibold">Enter Email: </h1>
        <input
          className="p-2 ml-5 ring-1 rounded-md w-[50%]"
          type="email"
          name="emailId"
          placeholder="Enter your email"
          value={student.emailId}
          onChange={handleChange}
        />
        <h1 className="ml-5 my-2 font-semibold">Enter Branch: </h1>
        <input
          className="p-2 ml-5 ring-1 rounded-md w-[50%]"
          type="text"
          name="branch"
          placeholder="Enter your branch"
          value={student.branch}
          onChange={handleChange}
        />

        <button className="bg-red-400 ring p-3 rounded-sm w-[20%] mt-5 ml-5 mb-5 cursor-pointer font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateStudent;
