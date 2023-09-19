import Header from '@/components/Header';
import Footer from '@/components/Footer'; 
import Link from 'next/link';
import { UserProfile } from '@clerk/nextjs';
const ProfilePage = () => {
  return (
    <>
      <Header />
      <div>
        <UserProfile />
      </div>
      <div style={{ marginBottom: '100px' }}></div> {/* 여기에 여백을 추가 */}
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
export default ProfilePage;
