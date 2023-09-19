import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-300 py-4 px-8 fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center font-bold">
              <p className="text-lg text-white">ⓒ Yeong-Mu</p>
            </div>
            <div className="flex items-center font-bold">
              <Link href="/repos" className="text-lg text-white hover:text-blue-900 mr-4">
                ➤ GitHub ID : fprh13
              </Link>
              {/* Add more footer links here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
