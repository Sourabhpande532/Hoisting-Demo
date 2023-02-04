import React, { useState } from 'react'
import axios from "axios";

const Form = (props,{BASE_URL}) => {
/*Logic:=> take Data from fronted Stored somewhere(useState) then send to Backend */
const [userInputName, setUserInputName] = useState("");
const [userInputEmail, setUserInputEmail] = useState("");
console.log(userInputName,userInputEmail);

/*Function to send Data */
const submitDetail = async() =>{
  const data = {
    name: userInputName,
    email:userInputEmail
  };
/*Use Axios Who communicate with fronted to Backend */
const sendData = await axios.post(`${BASE_URL}/fetchUser`, data);
if (sendData.status === 201 && sendData.data.success) {
  console.log("User created", sendData);
  props.bringUserData();
}
// console.log(sendData)
}

  const manipulateSubmit = (event)=>{
  event.preventDefault();
  /*submit The Data */
  submitDetail();
  //Empty the previous Detail
  setUserInputName("");
  setUserInputEmail("");
  }
  return (
    <div>
        <form onSubmit={manipulateSubmit}>
        <section className="text-gray-600 body-font relative">
          <div className="containFr px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-6">
              <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                Create User
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      /*take value from fronted stored it and modify/update it */
                      value={userInputName}
                      onChange={(event)=>setUserInputName(event.target.value)}

                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={userInputEmail}
                      onChange={(events)=>setUserInputEmail(events.target.value)}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" 
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}

export default Form;