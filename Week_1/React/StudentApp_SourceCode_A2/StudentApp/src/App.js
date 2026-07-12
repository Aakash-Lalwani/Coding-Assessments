import './App.css';
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Contact} from './Components/Contact';

function App() {
  return (
    <div className="app-shell">
      <main className="app-card">
        <p className="eyebrow">Student Assignment</p>
        <h1>Student Management Portal</h1>
        <p className="intro">
          A simple React app with separate Home, About, and Contact sections.
        </p>

        <div className="section-list">
          <Home />
          <About />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
