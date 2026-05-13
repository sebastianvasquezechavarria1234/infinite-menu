'use client';

import InfiniteMenu from '@/components/InfiniteMenu';

const items = [
  {
    image: '/planets/mercury.jpg',
    link: '#',
    title: 'MERCURY',
    description: 'The smallest planet and the closest to the Sun.'
  },
  {
    image: '/planets/venus.jpg',
    link: '#',
    title: 'VENUS',
    description: 'A thick, toxic atmosphere traps heat in a runaway greenhouse effect.'
  },
  {
    image: '/planets/earth.jpg',
    link: '#',
    title: 'EARTH',
    description: 'Our fragile blue marble, the only known home for life.'
  },
  {
    image: '/planets/mars.jpg',
    link: '#',
    title: 'MARS',
    description: 'The red planet, a dusty, cold, desert world.'
  },
  {
    image: '/planets/jupiter.jpg',
    link: '#',
    title: 'JUPITER',
    description: 'The largest planet in our solar system, a massive gas giant.'
  },
  {
    image: '/planets/saturn.jpg',
    link: '#',
    title: 'SATURN',
    description: 'Adorned with a dazzling, complex system of icy rings.'
  },
  {
    image: '/planets/uranus.jpg',
    link: '#',
    title: 'URANUS',
    description: 'An ice giant with a unique tilt, rotating nearly on its side.'
  },
  {
    image: '/planets/neptune.jpg',
    link: '#',
    title: 'NEPTUNE',
    description: 'The most distant major planet, dark, cold and whipped by winds.'
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
