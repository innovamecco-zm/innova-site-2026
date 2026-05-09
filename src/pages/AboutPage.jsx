import About from '../components/About';
import Mission from '../components/Mission';
import Values from '../components/Values';
import Team from '../components/Team';
import Compliance from '../components/Compliance';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <Mission />
      <Values />
      <Team />
      {/* Show compliance here to build authority */}
      <Compliance /> 
    </div>
  );
}