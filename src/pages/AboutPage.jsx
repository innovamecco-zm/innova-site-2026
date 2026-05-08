import About from '../components/About';
import Mission from '../components/Mission';
import Values from '../components/Values';
import Team from '../components/Team';

export default function AboutPage() {
  return (
    <div className="pt-20"> {/* Add padding for the sticky nav */}
      <About />
      <Mission />
      <Values />
      <Team />
    </div>
  );
}