export default function About({ showDay }) {
  console.log('About showDay:', showDay);
  return (
    <div className={`relative  left-1/12 z-20 px-8 py-12 text-left text-[#ededed] font-micro transition-all duration-1000 ease-in-out
        ${showDay ? 'top-[90%]' : 'top-1/8'}`}>
      <h1 className="text-9xl -mb-6">Hi,</h1>
      <h1 className="text-7xl">I'm Ariel Sharon Ferdinandus</h1>
      <p className="text-6xl">Manage Service | Graphic Design | UI/UX</p>
      <p className="text-5xl text-[#222222] duration-300 hover:text-[#ededed] w-[38%]">
        I'm Joker, just like Worker – Joke is my Work
      </p>
    </div>
  );
}
