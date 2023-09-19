import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; 


const DashboardPage = () => {
  return (
    <>
      <Header />
      <h1 className="text-2xl font-bold mb-5 ">🌟 New NFT</h1>
      <p className="font-bold mb-5 mb-5">
        <br/>
        Hello, this is a newly released NFT.
          <br/>
          <br/>
          If you're interested
          <br/>
          in creating NFTs for free,
          <br/>
          please refer to the website below.
          <br/>
          <Link
                  href="https://www.mintables.club"
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                   ➤ Mintables
                </Link>
                <br/> Scroll down to take a look at the upcoming NFTs."
        </p>
      <div>
        <Image className="text-2xl font-bold mb-1 py-10 px-8 fixed top-20 left-0 right-0 z-50" src="/images/list.png" alt="NFT" width={500} height={450} />
        <Image src="/images/tosil.png" alt="NFT" width={500} height={450} />
        <Image src="/images/0.png" alt="NFT" width={500} height={450} />
        <Image src="/images/1.png" alt="NFT" width={500} height={450} />
        <Image src="/images/2.png" alt="NFT" width={500} height={450} />
        <Image src="/images/3.png" alt="NFT" width={500} height={450} />
        <Image src="/images/4.png" alt="NFT" width={500} height={450} />
        <Image src="/images/5.png" alt="NFT" width={500} height={450} />
        <Image src="/images/6.png" alt="NFT" width={500} height={450} />
        <Image src="/images/7.png" alt="NFT" width={500} height={450} />
        <Image src="/images/8.png" alt="NFT" width={500} height={450} />
        <Image src="/images/9.png" alt="NFT" width={500} height={450} />
        <Image src="/images/10.png" alt="NFT" width={500} height={450} />
        <Image src="/images/11.png" alt="NFT" width={500} height={450} />
        <Image src="/images/12.png" alt="NFT" width={500} height={450} />
        <Image src="/images/13.png" alt="NFT" width={500} height={450} />
        <Image src="/images/14.png" alt="NFT" width={500} height={450} />
        <Image src="/images/15.png" alt="NFT" width={500} height={450} />
        <Image src="/images/16.png" alt="NFT" width={500} height={450} />
        <Image src="/images/17.png" alt="NFT" width={500} height={450} />
        <Image src="/images/18.png" alt="NFT" width={500} height={450} />
        <Image src="/images/19.png" alt="NFT" width={500} height={450} />
        <Image src="/images/20.png" alt="NFT" width={500} height={450} />

      </div>

      <div style={{ marginBottom: '50px' }}></div> {/* 여기에 여백을 추가 */}
      <Link
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Back to ➤ MainPage 
      </Link>


      <div style={{ marginBottom: '100px' }}></div> {/* 여기에 여백을 추가 */}
      <Footer></Footer>
    </>
  );
};

export default DashboardPage;
