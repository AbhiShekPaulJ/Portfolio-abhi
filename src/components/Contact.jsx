import React, { useRef, useState } from "react";
import { FiMail, FiUser, FiPhone } from "react-icons/fi";
import { FaLinkedinIn, FaGithub,} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";




import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const now = new Date();
    const timestamp = now.toLocaleString();

    // const formData = new FormData(formRef.current);
    // formData.append("time", timestamp);
    formRef.current.time.value = timestamp;

    emailjs
      .sendForm(
        "service_bq9aptk",       // replace with your service ID
        "template_o8y1mob",    // replace with your actual template ID
        formRef.current,
        "jOqtuu0pv0aAYFqHE"        // replace with your public key
      )
      .then(
        () => {
          setStatus("Message sent successfully");
          e.target.reset();
        },
        () => {
          setStatus("Failed to send message");
        }
      );
  };

  return (
    <div className=" min-h-screen lg:p-8  font-stretch-60% ">
      <h1 className="text-8xl text-[#fffce1] text-left font-bold w-[90%] mx-auto font-stretch-60% mb-10">CONTACT ME</h1>
      <div className="flex flex-col w-[90%] mx-auto lg:flex-row gap-6 ">
        {/* Left Info Panel */}
        <div className=" rounded-xl shadow-md p-6 lg:w-1/3 flex lg:flex-col gap-2">
          <div className="mb-4">
            <IoLocationOutline className="lg:text-3xl text-sm mb-2"></IoLocationOutline>
            <p className="font-semibold lg:text-2xl text-sm">LOCATION:</p>
            <p className="text-gray-600">Hyderabad, Telangana</p>
          </div>
          <div className="mb-4">
          <FiPhone className="lg:text-3xl text-sm mb-2"></FiPhone>
            <p className="font-semibold lg:text-2xl text-sm">CONTACT NUMBER:</p>
            <p className="text-gray-600">+91 8008806079</p>
          </div>
          <div className="mb-4">
            <MdOutlineMarkEmailRead className="lg:text-3xl text-sm mb-2"></MdOutlineMarkEmailRead>
            <p className="font-semibold lg:text-2xl text-sm">EMAIL ME:</p>
            <p className="text-gray-600">jabhishekpaul079@gmail.com</p>
          </div>
          <div className="mt-6 hidden lg:block">
            <p className="font-semibold text-2xl mb-2">SOCIALS</p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className=" p-2 rounded-md border shadow-sm">
                <FaLinkedinIn className="text-xl" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className=" p-2 rounded-md border shadow-sm">
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className=" rounded-xl shadow-md p-6 flex-1">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-semibold">FULL NAME</label>
                <div className="flex items-center border rounded-md px-3 mt-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="flex-1 py-4 focus:outline-none bg-transparent"
                  />
                  <FiUser />
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold">EMAIL ADDRESS</label>
                <div className="flex items-center border rounded-md px-3 mt-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="flex-1 py-4 focus:outline-none bg-transparent"
                  />
                  <FiMail />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold">SUBJECT</label>
              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                className="w-full mt-1 py-4 px-3 border rounded-md resize-none focus:outline-none"
              />
              <input type="hidden" name="time" />
            </div>

            <div>
              <label className="text-sm font-semibold">YOUR MESSAGE</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message"
                required
                className="w-full mt-1 p-3 py-4 border rounded-md resize-none focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#fffce1] text-zinc-950 px-5 py-3 rounded-md font-semibold duration-150 hover:scale-105"
            >
              Send Me Message
            </button>

            {status && <p className="mt-2 text-green-400">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
