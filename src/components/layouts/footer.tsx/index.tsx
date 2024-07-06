import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

const listNavFooter = [
  { label: 'About', href: '' },
  { label: 'Feature', href: '/about' },
  { label: 'Service', href: '/contact' },
  { label: 'Our Partners', href: '/contact' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <div className="bg-foreground">
      <div className="container flex flex-col items-center gap-10 py-10 text-white">
        <div className="flex items-center gap-3">
          <Image alt="" src="/assets/images/logo.png" width={35} height={35} />
          <h1 className="text-2xl font-bold">LFoot</h1>
        </div>
        <div className="space-x-24">
          {listNavFooter.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-8 text-xl">
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaYoutube />
          <FaTiktok />
        </div>
        <div className="flex gap-1 text-sm opacity-80">
          © 2024 <p className="text-primary">LFoot</p>. All rights reserved.
        </div>
      </div>
    </div>
  );
}
