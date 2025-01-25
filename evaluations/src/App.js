import './App.css';
import Evaluation from './components/EvaluationPage/Evaluation';
import Results from './components/EvaluationPage/Results';

function App() {
  return (
    <div className="app">
      <Evaluation role="Software Engineer" />
      <Results role="Software Engineer" />
    </div>
  );
}

export default App;
