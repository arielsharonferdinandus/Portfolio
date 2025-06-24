import { useNavigate } from 'react-router-dom';
import Contact from '../../assets/Contact.svg';

export default function Navbar({ showDay }) {
  const navigate = useNavigate();

  console.log('Navbar showDay:', showDay);

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-2 z-30 bg-[#222]/60">
      <span className='text-7xl tracking-widest font-micro transition-all duration-500 text-[#ededed]'>ARIEL SHARON</span>
      <a href="https://www.instagram.com/ariel_sharon31/" target="_blank" rel="noopener noreferrer" className="w-18 h-18">
        <img src={Contact} className="w-full h-full hover:brightness-60" />
      </a>
    </nav>
  );
}
