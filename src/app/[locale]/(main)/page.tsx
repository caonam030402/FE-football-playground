'use client';

import React from 'react';

import FindOpponent from './components/find-opponent';
import FindPitch from './components/find-pitch';
import Introduce from './components/introduce';
import RecommendedPitches from './components/recommended-pitches';
import RecommendedTeams from './components/recommended-teams';
import Service from './components/service';
import SocialMediaGallery from './components/social-media-gallery';

export default function HomePage() {
  return (
    <div className="">
      <Introduce />
      <Service />
      <FindPitch />
      <RecommendedPitches />
      <FindOpponent />
      {/* <FindLocalPlayersSection /> */}
      <RecommendedTeams />
      <SocialMediaGallery />
    </div>
  );
}
