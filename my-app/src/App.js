import './App.css';

//components
import Header from './components/Header';
import Todoform from './components/Todoform';
import { Todos } from './components/Todos';

function App() {
  return (
    <div className="App">
    <Header />
    <Todoform/>     {/*alignment for manage the project step by step format */}
    <Todos/>
    </div>
  );
}
export default App;
