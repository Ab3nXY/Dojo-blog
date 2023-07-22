import Navebar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navebar />
      <div className="content">
        <Home></Home>
      </div>
    </div>
  );
}

export default App;
