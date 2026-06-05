'use client';

import InfiniteMenu from '@/components/InfiniteMenu';

const items = [
  {
    image: '/image-1 (1).jpg',
    link: '#',
    title: 'Abstract Flow',
    description: 'A mesmerizing abstract composition of light and color.'
  },
  {
    image: '/image-1 (2).jpg',
    link: '#',
    title: 'Digital Waves',
    description: 'Fluid digital patterns captured in a single moment.'
  },
  {
    image: '/image-1 (3).jpg',
    link: '#',
    title: 'Neon Dreams',
    description: 'Vibrant neon hues blending into a cosmic vision.'
  },
  {
    image: '/image-1 (4).jpg',
    link: '#',
    title: 'Prism Light',
    description: 'Light refracted through an infinite spectrum of color.'
  },
  {
    image: '/image-1 (5).jpg',
    link: '#',
    title: 'Void Echo',
    description: 'An ethereal echo emerging from the deep void.'
  },
  {
    image: '/image-1 (1).webp',
    link: '#',
    title: 'Crystal Matrix',
    description: 'Geometric precision meeting organic beauty.'
  }
];

export default function Home() {
  return (
    <main className="w-full h-screen bg-black">
      <div style={{ height: '100%', width: '100%', position: 'relative' }}>
        <InfiniteMenu items={items} scale={1.5} />
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          display: 'flex',
          gap: '16px',
          zIndex: 9999,
        }}
      >
        <a
          href="https://sebas-dev.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff',
            textDecoration: 'underline',
            fontStyle: 'italic',
            fontSize: '14px',
            fontWeight: 200,
            fontFamily: 'var(--font-outfit), sans-serif',
            opacity: 0.8,
            transition: 'opacity 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
        >
          ✨ Created by Sebastian Vasquez
        </a>
        <a
          href="https://github.com/sebastianvasquezechavarria1234/infinite-menu"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#fff',
            textDecoration: 'underline',
            fontStyle: 'italic',
            fontSize: '14px',
            fontWeight: 200,
            fontFamily: 'var(--font-outfit), sans-serif',
            opacity: 0.8,
            transition: 'opacity 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.8')}
        >
          💻 View source code
        </a>
      </div>
    </main>
  );
}
