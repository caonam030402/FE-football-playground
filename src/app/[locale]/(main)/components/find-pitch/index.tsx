import Image from 'next/image';
import React from 'react';

import SectionHeader from '@/components/atoms/section-header';

export default function FindPitch() {
  return (
    <div className="section-container">
      <div className="container flex items-center gap-20">
        <Image
          alt=""
          className="h-[400px] w-full overflow-hidden rounded-xl"
          src="https://images.pexels.com/photos/6099153/pexels-photo-6099153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={5000}
          height={5000}
        />

        <SectionHeader
          action={{
            title: 'View all pitches near you',
            href: '/find-local-players',
          }}
          className="mb-0"
          classNameDescription="w-full"
          align="left"
          title="Easy to find & hire a pitch"
          description="We've got a great range of Pitches to play on throughout all the big city area in VietNam, including football pitches for 5, 6, 7 and 11 a side."
        />
      </div>
    </div>
  );
}
