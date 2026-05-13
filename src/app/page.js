'use client';

import InfiniteMenu from '@/components/InfiniteMenu';

const items = [
  {
    image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bac4?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    title: 'EARTH',
    description: 'Our fragile blue marble, the only known home for life.'
  },
  {
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    title: 'MARS',
    description: 'The red planet, a dusty, cold, desert world with a thin atmosphere.'
  },
  {
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    title: 'JUPITER',
    description: 'The largest planet in our solar system, a massive gas giant.'
  },
  {
    image: 'https://images.unsplash.com/photo-1614726365952-501192e27214?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    title: 'SATURN',
    description: 'Adorned with a dazzling, complex system of icy rings.'
  },
  {
    image: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    title: 'NEPTUNE',
    description: 'The most distant major planet, dark, cold and whipped by winds.'
  },
  {
    image: 'https://images.unsplash.com/photo-1614732484003-ef9881555dc3?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    title: 'VENUS',
    description: 'A thick, toxic atmosphere traps heat in a runaway greenhouse effect.'
  },
  {
    image: 'https://images.unsplash.com/photo-1614724723656-457e78e0b50b?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    title: 'MERCURY',
    description: 'The smallest planet and the closest to the Sun.'
  }
];

export default function Home() {
  return (
    <main className="w-full h-screen bg-black overflow-hidden">
      <div style={{ height: '100%', width: '100%', position: 'relative' }}>
        <InfiniteMenu items={items} scale={1.5} />
      </div>
    </main>
  );
}
