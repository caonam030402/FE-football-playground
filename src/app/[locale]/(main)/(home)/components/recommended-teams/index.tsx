import { ChevronRight } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/atoms/button';
import SectionHeader from '@/components/atoms/section-header';
import CardTeam from '@/components/molecules/card-team';

export default function RecommendedTeams() {
  return (
    <div className="section-container bg-[#f4f1f1]">
      <div className="container">
        <SectionHeader
          align="center"
          title="Find local players"
          description="Short of numbers? We'll show you all the local players who are suitable just for your team Let's try our incredible search!"
        />
        <div className="grid grid-cols-3 gap-10">
          {Array.from({ length: 6 }).map((_) => (
            <CardTeam key={Math.random()} />
          ))}
        </div>
        <div className="mt-10 flex w-full justify-center">
          <Button size="lg" className="space-x-2">
            <span>View more </span> <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
