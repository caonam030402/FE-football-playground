import {
  AlarmClock,
  CalendarDays,
  MapPin,
  MessageCircleMore,
  Star,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import AvatarGroup from '@/components/atoms/avatar-group';
import { Button } from '@/components/atoms/button';
import Divider from '@/components/atoms/divider';

export default function CardTeam() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-10">
      <div className="size-32 overflow-hidden rounded-full">
        <Image
          src="https://images.pexels.com/photos/23013656/pexels-photo-23013656/free-photo-of-etihad-stadium-in-manchester-england.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="size-full object-cover"
          width={3000}
          height={3000}
        />
      </div>
      <div className="flex flex-col items-center justify-between text-center">
        <div className="mt-3 text-xl font-bold">PHO NUI TEAM</div>
        <p className="my-3">
          &quot; Fit and play and enjoy Achieve goal with focus &quot;
        </p>
        <div className="my-3 flex w-full items-center justify-between">
          <div className="flex items-center gap-2 ">
            <Star size={20} fill="#FFC107" strokeWidth={0} />
            <span>
              <span className="font-bold">4.8</span> (22 reviews)
            </span>
          </div>
          <AvatarGroup size="sm" />
        </div>
      </div>
      <Divider className="my-2" />
      <div className="mt-5 flex flex-wrap justify-between gap-6 text-sm">
        <div className="flex items-center gap-1">
          <span>
            <CalendarDays size={18} />
          </span>
          <span>06.08.2024</span>
        </div>
        <div className="flex items-center gap-1">
          <span>
            <AlarmClock size={18} />
          </span>
          <span>17:30 - 19:30</span>
        </div>
        <div className="flex items-center gap-1">
          <span>
            <MapPin size={18} />
          </span>
          <span>Hai Chau, DN</span>
        </div>
      </div>
      <Button variant="outline" className="mt-7 w-full space-x-2">
        <MessageCircleMore size={16} /> <span>Message</span>
      </Button>
    </div>
  );
}
