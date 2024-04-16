import React, { useState, useEffect } from 'react';
import websites from '../api/websites';
import { Pixelify } from "react-pixelify";
import Draggable from 'react-draggable';
import Link from 'next/link';

const MyWorkComponent = () => {
  const initialCounts = websites.map(() => 20); // Initialize counts for each item
  const [counts, setCounts] = useState(initialCounts);
  const [intervalIds, setIntervalIds] = useState(Array.from({ length: websites.length }, () => null));
  const [isPhone, setIsPhone] = useState(false);

  const handleResize = () => {
    const newWidth = window.innerWidth;
    setIsPhone(newWidth > 800 ? false : true);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (index) => {
    clearInterval(intervalIds[index]); // Clear the interval for this item

    const id = setInterval(() => {
      setCounts(prevCounts => {
        const updatedCounts = [...prevCounts];
        if (updatedCounts[index] > 0) {
          updatedCounts[index] -= 3;
        } else {
          clearInterval(id); // Stop decreasing when count reaches 0
        }
        return updatedCounts;
      });
    }, 100);
    
    const updatedIntervalIds = [...intervalIds];
    updatedIntervalIds[index] = id;
    setIntervalIds(updatedIntervalIds);
  };

  const handleMouseLeave = (index) => {
    clearInterval(intervalIds[index]); // Clear the interval for this item

    const id = setInterval(() => {
      setCounts(prevCounts => {
        const updatedCounts = [...prevCounts];
        if (updatedCounts[index] < 20) {
          updatedCounts[index] += 3;
        } else {
          clearInterval(id); // Stop increasing when count reaches 20
        }
        return updatedCounts;
      });
    }, 100);

    const updatedIntervalIds = [...intervalIds];
    updatedIntervalIds[index] = id;
    setIntervalIds(updatedIntervalIds);
  };

  return (
    <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-[5rem] gap-4 my-9'>
      {websites.map((app, index) => {
        
        return (
          <Draggable key={app.name} defaultPosition={{ x:0, y:0 }}>
            <div 
              className='border cursor-all-scroll border-zinc-200 border-4 bg-zinc-800 overflow-hidden shadow-[8px_8px_0_0_rgb(255,255,255,0.3)]' 
              onMouseEnter={() => handleMouseEnter(index)} 
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Pixelify
                className='w-full'
                src={`/websites/${app.filename}`} 
                pixelSize={counts[index]} // Change pixelSize based on hover state
                width={isPhone ? 200 : 450}
                height={isPhone ? 100 : 330}
              />
              <Link href={app.url} target='_blank'>
                <p className='p-2 cursor-context-menu text-center lg:text-sm text-xs text-zinc-500 hover:text-white hover:underline'>{app.name}</p>
              </Link>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};

export default MyWorkComponent;
