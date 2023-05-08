import { About } from './About/About';
import { Booking } from './Booking/Booking';
import { ComeTogether } from './ComeTogether/ComeTogether';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { MainTitle } from './MainTitle/MainTitle';
import { PastGuests } from './PastGuests/PastGuests';
import { PerfectEscape } from './PerfectEscape/PerfectEscape';
import { SleepingArrangements } from './SleepingArrangements/SleepingArrangements';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <MainTitle />
      <SleepingArrangements />
      <PerfectEscape />
      <PastGuests />
      <ComeTogether />
      <Booking />
      <Footer />
    </>
  );
};
