import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();

  const handleContact = () => {
    window.open('https://wa.me/6283870815986', '_blank');
    navigate('/');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-white font-micro space-y-4">
      <p className="text-lg">Click the button below to open WhatsApp</p>
      <button
        onClick={handleContact}
        className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded shadow-md transition"
      >
        Contact via WhatsApp
      </button>
    </div>
  );
}
