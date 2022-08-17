import React from 'react';
import './App.css';
import ScoreVisualization from './components/score-visualization/scoreVisualization';

function App() {
  return (
    <div className="App">
      <ScoreVisualization name={'Ginger'} bmiScore={88.89} />
    </div>
  );
}

export default App;
