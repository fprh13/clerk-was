import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';

const Header = () => {
  const { userId } = auth();

  return (
    <nav className="bg-blue-900 py-4 px-8 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">JYMJYM</div>
            </Link>
          </div>
          {/* <Link href="/repos" className="text-gray-300 hover:text-white mr-4">
            Repos
          </Link> */}
          <div className="flex items-center font-bold">
            {!userId ? (
              <>
                <Link
                  href="/sign-in"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Learn
                </Link>
                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  New NFT
                </Link>

                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-white mr-4"
                >
                  Profile
                </Link>
                <div className="ml-auto">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
