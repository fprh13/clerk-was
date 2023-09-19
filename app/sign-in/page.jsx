import { SignIn } from '@clerk/nextjs';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; 

const SignInPage = () => {
  return (
    <>
    <Header></Header>
  <SignIn />
  <Footer></Footer>
  </>
  );
};

export default SignInPage;
