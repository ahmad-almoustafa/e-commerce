import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitContactUsForm } from "../features/contact/contactSlice";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [previousName, setPreviousName] = useState(""); // used for the confirmation message

  const [status, setStatus] = useState({ submitted: false, error: false });

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate the input fields
    if (!name || !email || !message) {
      return setStatus({ submitted: false, error: true });
    }

    // form submission process
    const data = { name, email, message };
    setPreviousName(name);

    dispatch(submitContactUsForm(data))
      .then(() => {
        setStatus({ submitted: true, error: false });
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => setStatus({ submitted: false, error: true }));
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg flex justify-center items-center h-3/5">
      <div className="w-3/5 ">
        <h1 className="text-lg text-center font-medium mb-4">Contact Us</h1>
        {status.submitted && (
          <p className="text-green-500 text-center">
            Thanks for contacting us {previousName}. Your message has been sent!
          </p>
        )}
        {status.error && (
          <div className="w-100">
            <p className="text-red-500 text-center">
              An error occurred. Please try again.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full p-5 ">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4">
              <label className="block text-gray-700 font-medium md:text-right mb-1 md:mb-0 pr-4">
                Name:
              </label>
            </div>
            <div className="md:w-3/4">
              <input
                className="bg-white rounded-lg p-2 w-full border border-gray-400 focus:outline-none focus:border-indigo-500"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4">
              <label className="block text-gray-700 font-medium md:text-right mb-1 md:mb-0 pr-4">
                Email:
              </label>
            </div>
            <div className="md:w-3/4">
              <input
                className="bg-white rounded-lg p-2 w-full border border-gray-400 focus:outline-none focus:border-indigo-500"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/4">
              <label className="block text-gray-700 font-medium md:text-right mb-1 md:mb-0 pr-4">
                Message:
              </label>
            </div>
            <div className="md:w-3/4">
              <textarea
                className="bg-white rounded-lg p-2 w-full border border-gray-400 focus:outline-none focus:border-indigo-500 h-24"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="mx-auto text-center">
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
