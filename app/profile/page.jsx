import Header from '@/components/Header';
import { UserProfile } from '@clerk/nextjs';
const ProfilePage = () => {
  return (
    <>
      <Header />
      <div>
        <UserProfile />
      </div>
    </>
  );
};
export default ProfilePage;
