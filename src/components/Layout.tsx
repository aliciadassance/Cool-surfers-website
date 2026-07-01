import type { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';

interface LayoutProps {
  transparentNav?: boolean;
  children: ReactNode;
}

export default function Layout({ transparentNav = false, children }: LayoutProps) {
  return (
    <>
      <Nav transparentOnTop={transparentNav} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
