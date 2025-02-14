import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <p className="text-gray-600 mt-2">Let's work together!</p>
      <a href="mailto:your.email@example.com">
        <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">
          Email Me
        </button>
      </a>
    </section>
  );
};

export default Contact;
