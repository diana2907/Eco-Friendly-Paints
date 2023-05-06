import { About } from './About/About';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';
import { MainTitle } from './MainTitle/MainTitle';
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
    </>
  );
};
