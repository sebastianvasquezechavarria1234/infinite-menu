'use client';

import InfiniteMenu from '@/components/InfiniteMenu';

const items = [
  {
    image: 'https://picsum.photos/600/600?random=1',
    link: '#',
    title: 'ABSTRACT',
    description: 'Exploring the depths of visual geometry.'
  },
  {
    image: 'https://picsum.photos/600/600?random=2',
    link: '#',
    title: 'MINIMAL',
    description: 'Less is more, but better.'
  },
  {
    image: 'https://picsum.photos/600/600?random=3',
    link: '#',
    title: 'FUTURISM',
    description: 'The speed and energy of the modern age.'
  },
  {
    image: 'https://picsum.photos/600/600?random=4',
    link: '#',
    title: 'ORGANIC',
    description: 'Fluid shapes inspired by nature.'
  },
  {
    image: 'https://picsum.photos/600/600?random=5',
    link: '#',
    title: 'KINETIC',
    description: 'Art that moves with your perception.'
  },
  {
    image: 'https://picsum.photos/600/600?random=6',
    link: '#',
    title: 'TEXTURE',
    description: 'Tactile sensations in a digital world.'
  }
];

export default function Home() {
  return (
    <main className="w-full h-screen bg-black overflow-hidden">
      <div style={{ height: '100%', width: '100%', position: 'relative' }}>
        {/* Adjusted scale to 1.5 for a more immersive feel */}
        <InfiniteMenu items={items} scale={1.5} />
      </div>
    </main>
  );
}
