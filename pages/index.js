import Head from 'next/head';
import Hero from '../components/Hero';
import { SliderData } from '../components/SliderData';
import Slider from '../components/Slider';
import Insta from '../components/Insta';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>lensBlur - My Hobbie</title>
        <meta name="description" content="My Work on Display" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="lensBlur" msg="I capture moments in Nature and keep them Alive. While contemplating the space-time fabric."/>
      <Slider slides={SliderData}/>
      <Insta/>
      <Contact/>
    </div>
  );
}
