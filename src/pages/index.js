import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Slider from '../components/Carousel/Carousel'
const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <WorkExperience />
      <Projects />
      <Technologies />
      <Slider />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
