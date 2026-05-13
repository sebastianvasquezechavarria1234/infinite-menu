'use client';

import InfiniteMenu from '@/components/InfiniteMenu';

const items = [
  {
    image: '/universe/nebula.jpg',
    link: '#',
    title: 'NEBULA',
    description: 'A vast cloud of gas and dust, the birthplace of new stars.'
  },
  {
    image: '/universe/galaxy.jpg',
    link: '#',
    title: 'GALAXY',
    description: 'A massive, gravitationally bound system of stars and dark matter.'
  },
  {
    image: '/universe/stars.jpg',
    link: '#',
    title: 'STARS',
    description: 'Luminous spheres of plasma held together by their own gravity.'
  },
  {
    image: '/universe/andromeda.jpg',
    link: '#',
    title: 'ANDROMEDA',
    description: 'Our nearest major galactic neighbor, a stunning spiral galaxy.'
  },
  {
    image: '/universe/cosmos.jpg',
    link: '#',
    title: 'COSMOS',
    description: 'The universe seen as a well-ordered and harmonious system.'
  },
  {
    image: '/universe/deep-space.jpg',
    link: '#',
    title: 'DEEP SPACE',
    description: 'The vast, mysterious regions beyond our own solar system.'
  },
  {
    image: '/universe/blackhole.jpg',
    link: '#',
    title: 'BLACK HOLE',
    description: 'A region of spacetime where gravity is so strong that nothing can escape.'
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
