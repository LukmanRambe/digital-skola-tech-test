import Hero from './components/pages/Hero';
import Testimonies from './components/pages/Testimonies';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 py-12 xl:p-24">
      <Hero />
      <Testimonies />
    </main>
  );
}
