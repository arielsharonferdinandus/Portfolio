export default function Works({ showDay }) {
  console.log('Works showDay:', showDay);

  const companies = [
    {
      name: 'PT Perkom Indah Murni',
      logo: '/src/assets/PIM.png',
      position: 'Managed Service Staff',
      period: '2024–Present',

    },
    {
      name: 'Medicalogy.com',
      logo: '/src/assets/Medicalogy.png',
      position: 'Graphic Designer | Content Creator',
      period: '2022–2024',

    },
    {
      name: 'PT Kasih Karunia Kekal',
      logo: '/src/assets/KKK.png',
      position: 'Field Engineer',
      period: '2021–2022',
    },
  ];

  return (
    <div
      className={`relative flex flex-col justify-between items-center z-20 px-8 py-18 text-[#222222] font-micro transition-all duration-1000 ease-in-out
        ${showDay ? '-top-1/3 pointer-events-auto' : 'top-9/10 pointer-events-auto'}`}
    >
      <h1 className="text-9xl font-bold text-center -mb-8">MY PREV COMPANIES</h1>
      <h2 className="text-5xl text-center mb-[5%]">Here are some of the companies where I have worked.</h2>

      <div className="flex gap-6 items-center text-white w-3/4">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-[#3c3c3c] border-t-4 border-r-4 border-b-4 border-l-4 border-t-[#585858] border-r-[#585858] border-b-[#1b1b1b] border-l-[#1b1b1b] p-8 rounded-s max-w-xl w-full">
            <img src={company.logo} alt={company.name} className="w-40 h-40 object-contain mb-4 overflow-hidden duration-300 hover:scale-125" />
            <h3 className="text-5xl font-bold">{company.name}</h3>
            <h4 className="text-3xl">{company.position}</h4>
            <p className="text-3xl mb-1 text-[#aaa]">{company.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
}