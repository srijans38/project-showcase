import { ReactNode } from 'react';
import Link from 'next/link';

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="text-gray-100 max-w-6xl mx-auto mt-6 px-4 xl:px-0">
      <nav>
        <h1 className="text-3xl">
          <Link href="/">
            <a>Project Showcase</a>
          </Link>
        </h1>
        {children}
      </nav>
    </div>
  );
}
