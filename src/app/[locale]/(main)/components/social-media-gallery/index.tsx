import React from 'react';

import { InfiniteMovingCards } from '@/components/atoms/infinite-moving';
import SectionHeader from '@/components/atoms/section-header';

const testimonials1 = [
  'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3316945/pexels-photo-3316945.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  'https://images.pexels.com/photos/3316948/pexels-photo-3316948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/9519495/pexels-photo-9519495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3651672/pexels-photo-3651672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const testimonials2 = [
  'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/10178705/pexels-photo-10178705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/20795779/pexels-photo-20795779/free-photo-of-football-players-fighting-over-ball-in-air.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/14353976/pexels-photo-14353976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3319180/pexels-photo-3319180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

export default function SocialMediaGallery() {
  return (
    <div className="section-container">
      <div className="container">
        <SectionHeader
          className="mb-0"
          classNameDescription="w-full"
          align="center"
          title="Have you joined the LFOOT community yet?"
          description="We've got a great range of Pitches to play on throughout all the big city area in VietNam, including football pitches for 5, 6, 7 and 11 a side."
        />
      </div>
      <div className="mt-10 w-full">
        <InfiniteMovingCards
          pauseOnHover={false}
          items={testimonials1}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          pauseOnHover={false}
          items={testimonials2}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
  );
}
