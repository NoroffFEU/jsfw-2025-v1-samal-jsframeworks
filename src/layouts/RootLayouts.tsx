import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

export default function RootLayout() {

  return (
    <div className="flex flex-col min-h-dvh m-auto container">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="py-4 text-center text-gray-600 bg-white/90 backdrop-blur shadow mt-4">
        &copy; {new Date().getFullYear()} Zeebra. All rights reserved.
      </footer>
    </div>
  );
}
