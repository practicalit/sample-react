import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Another from './components/Another';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <Another />
        <div>If you want to register please <Button id="registerId" label="Register"  /></div>
        <div>If have registered login <Button label="Login"/></div>
        <div>If you want to cancel membership  <Button label="Cancel"/></div>
      </header>
    </div>
  );
}

export default App;
