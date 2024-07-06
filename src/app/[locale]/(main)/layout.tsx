import React from 'react';

import Footer from '@/components/layouts/footer.tsx';

export default function LayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children} <Footer />
    </>
  );
}
