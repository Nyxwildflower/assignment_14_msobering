import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import { React, useState, useEffect } from "react";
import { resources } from "../data";

export default function Resources() {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    setFormValues({
      name: values.name.trim(),
      email: values.email.trim(),
      message: values.message.trim(),
    });

    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length > 50) {
      errors.name = "Please leave a shorter name.";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email.";
    }

    if (!values.message) {
      errors.message = "Message is required";
    } else if (values.message.length > 500) {
      errors.message = "Please leave a message less than 500 characters.";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  }

  const handleSubmit = (e) => {
    setSubmitMessage("");
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      const name = formValues.name;
      const email = formValues.email;
      const message = formValues.message;

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => {
          setSubmitMessage("Information Submitted!");
          setFormValues({ name: "", email: "", message: "" });
        })
        .catch((error) => alert(error));
    }
  }, [formErrors]);

  return (
    <section id="resources" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-col md:flex-row sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 w-full py-8 mx-auto">
          <div className="relative flex flex-wrap">
            {resources.map((resource) => (
              <div className="min-w-full mb-5" key={resource.title}>
                <a href={resource.link} className="flex">
                  <div className="flex w-10 self-center">
                    <img
                      src={resource.image}
                      alt={resource.alt}
                      className="shrink-0 min-w-full"
                    />
                  </div>
                  <div className="ml-4 hover:bg-gray-800">
                    <h2 className="title-font font-semibold text-white tracking-widest text-sm">
                      {resource.title}
                    </h2>
                    <p>{resource.description}</p>
                  </div>
                </a>
              </div>
            ))}
            <div className="min-w-full mb-5">
              <div className="flex items-stretch">
                <div className="self-center">
                  <MailIcon className="size-10 w-10 inline-block" />
                </div>
                <div className="ml-4">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-400 leading-relaxed">
                    madisonsobering@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="min-w-full mb-5">
              <div className="flex items-stretch">
                <div className="self-center">
                  <PhoneIcon className="w-10 inline-block" />
                </div>
                <div className="ml-4">
                  <h2 className="title-font font-semibold text-white tracking-widest text-xs -sm:mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">204-408-4029</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Have any questions or want to work together? Leave me a message!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              value={formValues.name}
              onChange={handleChange}
            />
            <p className="text-red-400">{formErrors.name}</p>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              value={formValues.email}
              onChange={handleChange}
            />
            <p className="text-red-400">{formErrors.email}</p>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              value={formValues.message}
              onChange={handleChange}
            />
            <p className="text-red-400">{formErrors.message}</p>
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
          <p className="mt-3 text-lg text-green-300">{submitMessage}</p>
        </form>
      </div>
    </section>
  );
}
