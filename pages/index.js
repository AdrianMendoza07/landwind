import Header from '../components/header';
import Main from '../components/main';
import FDescription from '../components/first-description';
import SDescription from '../components/second-sedcription';
import Card from '../components/card';
import Footer from '../components/footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Main />
      <FDescription />
      <SDescription />
      <Card />
      <Footer />
    </>
  );
}
