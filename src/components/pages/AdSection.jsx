import { useState, useEffect } from 'react';


const AdSection = ({ ads }) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 3000); // Change ads every 1 second

    return () => clearInterval(interval); // Clean up on unmount
  }, [ads.length]);

  return (
    <div className="w-[15vw] mt-4 m-5 h-[22%] fixed bottom-0 rounded-lg bg-slate-400 shadow-sm shadow-gray-900">
      <img
        src={ads[currentAdIndex]}
        alt="ads"
        className="w-full h-full object-cotian border-[1px] border-gray-400 rounded-lg "
      />
    </div>
  );
};

export default AdSection;
