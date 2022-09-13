import React, { useState, useEffect,useRef } from "react";

const Form = () => {
    const ref = useRef();
    const passRef = useRef();
  const [form, setForm] = useState({
    // username: "",
    // email: "",
    // password: "",
    // age: 0,
    // isIndian: false,
  });
  const handleonChange = (e) => {
    let { type, name, value, checked, files } = e.target;
    console.log(e);
    console.log(type, name, value, checked);
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
    setForm({
      ...form,
      [name]: value,
    });
    console.log("Hello");
  };
    useEffect (()=>{
        console.log(form);
    },[form])
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if(form.username)
    {
        ref.current.focus()
    }
    else if(!form.password)
    {
        passRef.current.focus()
    }
    ref.current.focus()
  };
  return (
    <div>
      Form
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Name :</label>
          <input
            ref={ref}
            type="text"
            name="username"
            placeholder="Enter Name..."
            value={form.name}
            onChange={handleonChange}
          ></input>
        </div>
        <div>
          <label>Age :</label>
          <input
            type="Number"
            ref={passRef}
            name="age"
            placeholder="Enter Password..."
            value={form.age}
            onChange={handleonChange}
          ></input>
        </div>
        <div>
          <label>Email :</label>
          <input
            type="text"
            name="email"
            placeholder="Enter E-Mail..."
            value={form.email}
            onChange={handleonChange}
          ></input>
        </div>
        <div>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password..."
            value={form.password}
            onChange={handleonChange}
          ></input>
        </div>
        <div>
          <label>City :</label>
          <select name="city" value={form.city} onChange={handleonChange}>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangluru">Bangluru</option>
          </select>
        </div>
        <div>
          <input
            type="checkbox"
            name="isIndian"
            checked={form.isIndian}
            onChange={handleonChange}
          ></input>
          <label>: Is Indian</label>
        </div>
        <div>
          <label>Gender :</label>
          <select
            name="selectGender"
            value={form.selectgender}
            onChange={handleonChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleonChange}
          ></input>
          <label>Male</label>
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleonChange}
          ></input>
          <label>Female</label>
        </div>
        <div>
          <label>User Resume :</label>
          <input
            type="file"
            name="resume"
            files={form.resume}
            onChange={handleonChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
