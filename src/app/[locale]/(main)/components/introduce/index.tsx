'use client';

import React from 'react';

import { Button } from '@/components/atoms/button';
import Header from '@/components/layouts/header';

import SearchPanel from './search-panel';

export default function Introduce() {
  return (
    <div className='h-screen bg-[url("/assets/images/img_introduce.png")] bg-cover text-white'>
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
  );
}
