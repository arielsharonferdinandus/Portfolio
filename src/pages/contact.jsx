import Background from '../components/background/background';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Background />

      <div className={`absolute top-0 left-0 w-full h-full flex justify-center items-center z-20 font-micro`}>
        <div className="flex flex-col gap-4 items-center text-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 bg-[#4f4f4f] border-t-4 border-r-4 border-b-4 border-l-4 border-t-[#585858] border-r-[#585858] border-b-[#1b1b1b] border-l-[#1b1b1b] p-6 sm:p-10 md:p-14 rounded-xl">
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">GET IN TOUCH</h1>
          <h2 className="text-sm sm:text-lg md:text-xl text-center mb-2">Feel free to message me about anything!</h2>

          {submitted ? (
            <p className="text-green-300 text-lg">✅ Message Sent!</p>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-[#333] text-white border-b-2 border-[#888] focus:outline-none focus:ring-2 focus:ring-[#aaa]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-[#333] text-white border-b-2 border-[#888] focus:outline-none focus:ring-2 focus:ring-[#aaa]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-2 rounded bg-[#333] text-white border-b-2 border-[#888] focus:outline-none focus:ring-2 focus:ring-[#aaa]"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#888] hover:bg-[#aaa] text-black py-2 rounded transition duration-300 font-bold"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
