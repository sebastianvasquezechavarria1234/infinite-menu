'use client';

import InfiniteMenu from '@/components/InfiniteMenu';

const items = [
  {
    image: '/abstract/chrome.jpg',
    link: '#',
    title: 'CHROME FLOW',
    description: 'A liquid metal surface reflecting a digital world of pure reflection.'
  },
  {
    image: '/abstract/neon.jpg',
    link: '#',
    title: 'NEON VORTEX',
    description: 'Electric pulses of light dancing through a dark, high-contrast void.'
  },
  {
    image: '/abstract/wave.jpg',
    link: '#',
    title: 'CRYSTAL WAVE',
    description: 'The smooth, rhythmic motion of transparent glass in a sunset glow.'
  },
  {
    image: '/abstract/pearl.jpg',
    link: '#',
    title: 'PEARL ESSENCE',
    description: 'Soft, iridescent gradients that shimmer with every movement.'
  },
  {
    image: '/abstract/gold.jpg',
    link: '#',
    title: 'LIQUID GOLD',
    description: 'The ultimate symbol of luxury, flowing with warmth and elegance.'
  },
  {
    image: '/abstract/spectrum.jpg',
    link: '#',
    title: 'SPECTRUM DRIFT',
    description: 'A full range of colors merging in a seamless, fluid transition.'
  },
  {
    image: '/abstract/prism.jpg',
    link: '#',
    title: 'PRISM SHAPE',
    description: 'Geometric light refraction creating sharp, vibrant color spikes.'
  },
  {
    image: '/abstract/iris.jpg',
    link: '#',
    title: 'IRIS BURST',
    description: 'A concentric explosion of color inspired by the beauty of the eye.'
  }
];

export default function Home() {
  return (
    <main className="w-full h-screen bg-black">
      <div style={{ height: '100%', width: '100%', position: 'relative' }}>
        <InfiniteMenu items={items} scale={1.5} />
      </div>
    </main>
  );
}
