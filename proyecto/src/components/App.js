//import logo from '../logo.svg';
//import '../App.css';

import SideBar from "./SideBar"
import ContentWrapper from "./ContentWrapper"



function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <SideBar />
        <ContentWrapper />
      </div>
    </div >
  );
}

export default App;

{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}