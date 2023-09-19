import { SignUp } from '@clerk/nextjs';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; 

const SignUpPage = () => {
  return (
    <>
    <Header/>
  <SignUp />
  <Footer />
  </>
  );
};

export default SignUpPage;
