
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Teams from './components/sections/Teams';
import Events from './components/sections/Events';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <Teams />
      <Events />
    </div>
  );
}

export default App;