import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "framer-motion"

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1e7c335b-fd74-4b06-aa2e-6847abc9c7cb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 text-gray-800">
        Contact <span className="underline text-blue-600">With Us</span>
      </h1>
      <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
        Ready to make a move? Let’s build your future together. We’d love to hear from you!
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-700 pt-8">
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 text-left mb-4 md:mb-0">
            <label htmlFor="name" className="font-medium text-gray-700">Your Name</label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 mt-2 focus:ring-2 focus:ring-blue-500"
              type="text"
              name="Name"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            <label htmlFor="phone" className="font-medium text-gray-700">Your Number</label>
            <input
              className="w-full border border-gray-300 rounded-lg py-3 px-4 mt-2 focus:ring-2 focus:ring-blue-500"
              type="tel"
              name="Phone"
              id="phone"
              placeholder="Your Number"
              required
              pattern="[0-9]{10}"
              maxLength={10}
            />
            <small className="text-gray-500">Enter a 10-digit phone number</small>
          </div>
        </div>

        <div className="mb-6 text-left">
          <label htmlFor="message" className="font-medium text-gray-700">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg py-3 px-4 mt-2 h-48 resize-none focus:ring-2 focus:ring-blue-500"
            name="Message"
            id="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <button
          className="w-full sm:w-auto bg-blue-600 text-white py-3 px-8 rounded-lg transition duration-300 transform hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
