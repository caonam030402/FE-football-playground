'use client';

import React from 'react';

import { Button } from '@/components/atoms/button';
import Header from '@/components/layouts/header';

import SearchPanel from './search-panel';

export default function Introduce() {
  return (
    <div className='relative h-screen bg-[url("/assets/images/img_introduce.png")] bg-cover text-white'>
      <video
        muted
        className="absolute z-0 size-full object-cover"
        src="https://videos.pexels.com/video-files/6077718/6077718-uhd_2560_1440_25fps.mp4"
        autoPlay
        loop
      />

      <div className="absolute size-full bg-black opacity-60 backdrop:blur-md" />
      <div className="absolute w-full ">
        <Header />
        <div className="container flex h-[calc(100vh-80px)] flex-col justify-between">
          <div className="mt-20 flex flex-col items-center 2xl:mt-14">
            <h1 className="text-[110px] font-bold">We live football</h1>
            <h4 className="text-[35px] font-normal">
              Find and join fantastic game !
            </h4>
            <Button size="lg" className="mt-8 font-semibold text-white">
              Let&apos;s take journey !
            </Button>
          </div>
          <div className="mb-16">
            <SearchPanel />
          </div>
        </div>
      </div>
    </div>
  );
}
