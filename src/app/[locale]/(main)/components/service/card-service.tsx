import { LandPlot } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/atoms/button';

interface IProps {
  item: {
    id: number;
    title: string;
    description: string;
  };
}

export default function CardService({ item }: IProps) {
  return (
    <div className="flex cursor-pointer flex-col items-center rounded-xl bg-foreground/5 px-7 py-10 transition-all duration-100 hover:bg-white hover:shadow-xl">
      <div className="flex size-24 items-center justify-center rounded-full bg-foreground/5">
        <LandPlot size={45} className="text-primary" strokeWidth={0.75} />
      </div>
      <div className="pb-4 pt-8 text-center text-lg font-semibold">
        {item.title}
      </div>
      <Button className="" size="sm">
        {item.description}
      </Button>
    </div>
  );
}
