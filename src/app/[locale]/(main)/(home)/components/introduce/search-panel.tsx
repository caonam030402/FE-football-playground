import { AlarmClock, Calendar, MapPin, Search } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/atoms/button';
import Divider from '@/components/atoms/divider';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/atoms/popover';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/atoms/tab';
import { DatePickerWithPresets } from '@/components/molecules/date-picker-with-presets';
import { cn } from '@/lib/utils';

export default function SearchPanel() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState({
    location: false,
    date: false,
  });

  const [searchValuePitch, setSearchValuePitch] = React.useState({
    date,
    location: '',
    timeStart: '',
    timeEnd: '',
  });

  const locationMock = [
    {
      id: 1,
      name: 'Hồ Chí Minh',
    },
    {
      id: 2,
      name: 'Hà Nội',
    },
    {
      id: 3,
      name: 'Đà Nẵng',
    },
    {
      id: 4,
      name: 'Bình Định',
    },
  ];

  const handleChangePick = (
    type: 'date' | 'time' | 'location',
    value?: string,
  ) => {
    if (type === 'location') {
      setOpen({ date: true, location: false });

      setSearchValuePitch({
        ...searchValuePitch,
        location: value || '',
      });
    }
  };

  const searchTeam = () => {
    return (
      <div className="flex items-center gap-20 ">
        <div className="grid flex-1 grid-cols-12 gap-8">
          <div className="col-span-5">
            <div className="flex w-full items-center gap-1 font-bold">
              <MapPin />
              <span>Location</span>
            </div>
            <Popover>
              <PopoverTrigger>
                <input
                  onFocus={() => setOpen({ date: false, location: true })}
                  value={searchValuePitch.location}
                  onChange={(e) => {
                    setSearchValuePitch({
                      ...searchValuePitch,
                      location: e.target.value,
                    });
                  }}
                  className={cn(
                    'mt-1 w-full border-b border-zinc-200 bg-transparent outline-none',
                  )}
                  placeholder="Tìm kiếm điểm đến..."
                  type="text"
                />
              </PopoverTrigger>
              <PopoverContent
                onOpenAutoFocus={(e) => e.preventDefault()}
                align="start"
                className="overflow-hidden border-0 border-transparent p-0 text-sm"
              >
                {locationMock.map((item) => (
                  <button
                    type="button"
                    onClick={() => {
                      handleChangePick('location', item.name);
                    }}
                    className="flex w-full cursor-pointer items-center gap-3 border-b p-3 last:border-transparent hover:bg-zinc-100"
                    key={item.id}
                  >
                    <MapPin size={20} />
                    <span>{item.name}</span>
                  </button>
                ))}
              </PopoverContent>
            </Popover>
          </div>
          <div className="col-span-4">
            <div className="flex w-full items-center gap-1 font-bold">
              <Calendar size={20} />
              <span>Date</span>
            </div>
            <DatePickerWithPresets
              onOpenChange={(e) => setOpen({ ...open, date: e })}
              open={open.date}
              isIcon={false}
              date={date}
              setDate={setDate}
            />
          </div>
          <div className="col-span-3">
            <div className="flex w-full items-center gap-1 font-bold">
              <AlarmClock />
              <span>Time</span>
            </div>
            <div className="mt-1 flex gap-3 opacity-80">
              <div className="flex items-center gap-2">
                <p>From:</p>
                <input
                  value={searchValuePitch.timeStart}
                  onChange={(e) => {
                    setSearchValuePitch({
                      ...searchValuePitch,
                      timeStart: e.target.value,
                    });
                  }}
                  className="border-b border-zinc-200 bg-transparent p-0 outline-none"
                  type="time"
                />
              </div>

              <div className="flex items-center gap-2">
                <p>To:</p>
                <input
                  onChange={(e) => {
                    setSearchValuePitch({
                      ...searchValuePitch,
                      timeEnd: e.target.value,
                    });
                  }}
                  className="border-b border-zinc-200 bg-transparent p-0 outline-none"
                  type="time"
                />
              </div>
            </div>
          </div>
        </div>
        <Button className="w-[10%]">
          <Search size={20} />
          <span className="ml-1">Search</span>
        </Button>
      </div>
    );
  };

  const tabs = [
    { label: 'Team', value: '0', element: searchTeam() },
    { label: 'Pitch', value: '1', element: searchTeam() },
    { label: 'Player', value: '2', element: searchTeam() },
    { label: 'Join', value: '3', element: searchTeam() },
  ];

  return (
    <div className=" overflow-hidden rounded-2xl bg-white px-7 py-5  text-black ">
      <Tabs defaultValue="0" className="w-full">
        <TabsList className="justify-start border-zinc-300 bg-transparent">
          {tabs.map((tab) => (
            <TabsTrigger
              className="rounded-full px-10 py-2 data-[state=active]:bg-foreground/75 data-[state=active]:text-white"
              key={tab.value}
              value={tab.value}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <Divider className="my-5" />
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.element}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
