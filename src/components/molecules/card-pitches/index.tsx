import { CalendarDays, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import AvatarGroup from '@/components/atoms/avatar-group';

export default function CardPitches() {
  return (
    <div className="overflow-hidden rounded-xl bg-white">
      <div className="h-[200px] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/23013656/pexels-photo-23013656/free-photo-of-etihad-stadium-in-manchester-england.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width={3000}
          height={3000}
        />
      </div>
      <div className="p-6 text-sm">
        <h1 className="text-xl font-bold">Tuyen Son Sport Complex</h1>
        <div className="my-3 flex items-center justify-between">
          <div className="flex items-center gap-3 ">
            <Star size={20} fill="#FFC107" strokeWidth={0} />
            <span>
              <span className="font-bold">4.8</span> (22 reviews)
            </span>
          </div>
          <AvatarGroup size="sm" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <CalendarDays size={18} /> <span>17:30, Thu, Aug 10</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin size={18} />
            <span> 61 Nguyen Khuong, Nam Tu Liem, Da Nang</span>
          </div>
        </div>
      </div>
    </div>
  );
}
