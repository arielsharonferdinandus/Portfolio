import { useDayNight } from '../../contexts/DayNightContext';
import Moon from '../../assets/Moon.svg';
import Night from '../../assets/Night.jpg';
import Ground from '../../assets/Ground.svg';
import Day from '../../assets/Day.jpg';
import Navbar from '../navbar/navbar';
import About from '../layouts/home/about'
import Works from '../layouts/home/works';
import Karo from'../carousel/carousel';

export default function Background() {
  const { showDay, toggleDayNight } = useDayNight();
  
  console.log('showDay:', showDay);

  return (
    <div className="relative w-full h-screen overflow-hidden" onClick={toggleDayNight} >
      <Navbar showDay={showDay} />
      <About showDay={showDay} />
      <Works showDay={showDay} />
      <Karo showDay={showDay} />

      {/* Sky: Day */}
      <div
        className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${
          showDay ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
        style={{ backgroundImage: `url(${Day})` }}
      >
        {/* Sun */}
        <div
          className={`absolute bg-[#f8fae2] left-40 w-42 h-42 transition-all duration-1000 ${
            showDay ? 'top-30 opacity-100' : 'top-[150%] opacity-0'
          }`}
        />
      </div>

      {/* Night Sky */}
      <div className={`absolute inset-0 bg-cover bg-no-repeat transition-opacity duration-1000 ${ showDay ? 'opacity-0 z-0' : 'opacity-100 z-10'}`} style={{ backgroundImage: `url(${Night})` }}>
        <img src={Moon} alt="Moon" className={`absolute right-40 w-42 image-render-pixel transition-all duration-1000 ${ showDay ? 'top-[150%] opacity-0' : 'top-30 opacity-100'}`} />
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 w-full h-45 bg-cover bg-repeat-x animate-ground-move z-30" style={{ backgroundImage: `url(${Ground})` }} />
    </div>
  );
}
