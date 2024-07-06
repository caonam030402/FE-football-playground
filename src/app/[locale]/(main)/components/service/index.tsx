import React from 'react';

import SectionHeader from '@/components/atoms/section-header';

import CardService from './card-service';

const listService = [
  {
    id: 1,
    title: 'Finding and hiring pitches near',
    description: '+500 pitches',
  },
  {
    id: 2,
    title: 'Suitable Opponent team with you',
    description: '+600 teams',
  },
  {
    id: 3,
    title: 'Make connection with local players',
    description: '+1.000 players',
  },
  {
    id: 4,
    title: 'Manager all your team activities',
    description: '+10 task',
  },
];

export default function Service() {
  return (
    <div className="container section-container">
      <SectionHeader
        title="Bring football to closer to you"
        description="Whether you're looking for a field, some new opponent team to
        against or want to join a random match or anything else. We've got
        you covered."
      />
      <div className="grid grid-cols-4 gap-12">
        {listService.map((item) => (
          <CardService item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
