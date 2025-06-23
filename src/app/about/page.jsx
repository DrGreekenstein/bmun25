import React from 'react';
import NavBar from '@/components/navbar';
import SideBar from '@/components/SideBar';
import BoxB from '@/components/utils/box';
import BGAnimation from '@/components/utils/animation';

const About = () => {
  const titles = [
    "Home", "Conference-details", "About", "Committees", "Resources", "Contact us"
  ];

  return (
    <>
      <div className="flex">
        <NavBar />
        <BoxB>
          <h1 className='text-white text-5xl'>DON BOSCO PARK CIRCUS</h1>
          <br />
          <p className='text-white text-2xl'>Don Bosco, whose name adorns over 2032 educational institutions and who has 16,385 followers all over the world, was a visionary - not merely metaphorically speaking, but literally. He had visions which, in his humility, he called 'dreams'. He himself has said that he never took a step, never initiated a project, unless he had been directed by heaven to do so.And the medium, through which heaven communicated its message to Don Bosco, was his, 'dreams'. Calcutta is a city of Don Bosco's dreams!</p> <br />
          <p className='text-white text-2xl'>The emblem of Don Bosco School, Park Circus, Kolkata, has a cross, an open book placed on a lotus as symbols and the motto of our school "Virtus Et Scientia" engraved on it. Cross symbolizes Love, the Open Book signifies self-knowledge, and the Lotus represents purity. Virtus (virtue) is the moral and ethical quality of a student's life which enables him to grow into a mature human being. Scientia (knowledge) is the ability to integrate oneself and discover the truth and beauty of life with an enquiring mind.
          </p>
        </BoxB>
        <SideBar titles={titles} /> 
        <BGAnimation/>
      </div>
    </>
  );
};

export default About;