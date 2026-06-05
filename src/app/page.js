'use client';

import InfiniteMenu from '@/components/InfiniteMenu';

const items = [
  {
    image: '/abstract/chrome.jpg',
    link: '#',
    title: 'Chrome Flow',
    description: 'A liquid metal surface reflecting a digital world of pure reflection.'
  },
  {
    image: '/abstract/neon.jpg',
    link: '#',
    title: 'Neon Vortex',
    description: 'Electric pulses of light dancing through a dark, high-contrast void.'
  },
  {
    image: '/abstract/wave.jpg',
    link: '#',
    title: 'Crystal Wave',
    description: 'The smooth, rhythmic motion of transparent glass in a sunset glow.'
  },
  {
    image: '/abstract/pearl.jpg',
    link: '#',
    title: 'Pearl Essence',
    description: 'Soft, iridescent gradients that shimmer with every movement.'
  },
  {
    image: '/abstract/gold.jpg',
    link: '#',
    title: 'Liquid Gold',
    description: 'The ultimate symbol of luxury, flowing with warmth and elegance.'
  },
  {
    image: '/abstract/spectrum.jpg',
    link: '#',
    title: 'Spectrum Drift',
    description: 'A full range of colors merging in a seamless, fluid transition.'
  },
  {
    image: '/abstract/prism.jpg',
    link: '#',
    title: 'Prism Shape',
    description: 'Geometric light refraction creating sharp, vibrant color spikes.'
  },
  {
    image: '/abstract/iris.jpg',
    link: '#',
    title: 'Iris Burst',
    description: 'A concentric explosion of color inspired by the beauty of the eye.'
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
          ★★★ Creado por Sebastian Vasquez
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
          💻 Ver codigo fuente
        </a>
      </div>
    </main>
  );
}
