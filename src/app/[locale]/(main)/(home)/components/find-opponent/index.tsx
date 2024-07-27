import React from 'react';

import SectionHeader from '@/components/atoms/section-header';

export default function FindOpponent() {
  return (
    <div className="section-container">
      <div className="container">
        <SectionHeader
          action={{
            title: 'Find local players',
            href: '/find-local-players',
          }}
          align="left"
          title="Find local players"
          description="Short of numbers? We'll show you all the local players who are suitable just for your team Let's try our incredible search!"
        />
        <div className="overflow-hidden rounded-xl">
          <video
            muted
            className="h-[700px] w-full  object-cover"
            src="https://videos.pexels.com/video-files/6077710/6077710-uhd_2560_1440_25fps.mp4"
            autoPlay
            loop
          />
        </div>
      </div>
    </div>
  );
}
