import React, { useState, useEffect } from "react";
import userpic from "../images/user.jpg";

const FormControl = () => {
  const [Data, setData] = useState([]);
  const [Error, setError] = useState("");
  const [isCreate, setisCreate] = useState(false);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.status >= 200 && response.status <= 299) {
      const jsonResponse = await response.json();
      setData(jsonResponse);
    } else {
      // Handle errors
      setError(response.status);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='container'>
        <div className='main_con'>
          {Error !== "" && (
            <h2>Error occured while Fetching: Status Code {Error}</h2>
          )}

          {Data.map((e) => (
            <div key={e.id} className='post'>
              <img src={userpic} alt='' />
              <div>
                <label htmlFor=''>{e.name}</label>
                <label htmlFor=''>{e.email}</label>
                <label htmlFor=''>
                  <a href={"https://" + e.website}>{e.website}</a>
                </label>
                <p>{`${e.address.street}, ${e.address.suite}, ${e.address.city}`}</p>
              </div>
              <div className='map'></div>
            </div>
          ))}

          <input
            type='submit'
            onClick={() => setisCreate((cur) => !cur)}
            value='Create'
          />
        </div>
      </div>

      {isCreate && (
        <form>
          <input type='text' name='' id='' placeholder='Name' />
          <input type='text' name='' id='' placeholder='Username' />
          <input type='email' name='' id='' placeholder='Email' />
          <input type='submit' value='Submit' />
        </form>
      )}
    </>
  );
};

export default FormControl;
