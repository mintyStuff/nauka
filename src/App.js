import './App.css';
import { ExampleButton } from './ExampleComponent';

function App() {
  return (
    <div className="App">
      <ExampleButton label="SHORT LABEL" />
      <ExampleButton label="Something abcde" />
      <ExampleButton label="Lalalala" disabled={true} />
    </div>
  );
}

export default App;
