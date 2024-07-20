import React from 'react';

import FindLocalPlayersSection from './components/find-local-players-section';
import Introduce from './components/introduce';
import Service from './components/service';

export default function HomePage() {
  return (
    <div className="">
      <Introduce />
      <Service />
      <FindLocalPlayersSection />
    </div>
  );
}
