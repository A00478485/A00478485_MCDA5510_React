import './App.css';
import Headr from './header.js';
import pp from './pp.jpg';


function App() {
  return (<>
    <Headr />
    <div className='Main'>
      <br />
      <br />
      <h1 >
        Introduction - Bhavy Doshi from DEV branch
      </h1>
      
      <br />
      <br />
      <br />
      <div className="flex-item-container">
        <div className="flex-item-left">
        <div className="profile-picture">
      <img src={pp} alt="Profile" className="profile-picture-img" />
    </div>
          </div>
        <div className="flex-item-right">
          <p>Hello Reader ...</p><br/>
          <p> I'm Bhavy Doshi and pusuing my Master of Science in Computing and Data Analytics at Saint Mary's University located in Halifax, Nova Scotial. I have an overall expirience of 6 years working in IT Industry in India.</p>
          <br />
          <p> I joined the MCDA program mainly due to two reasons</p>
          <ul>
            <li>This program bridges the gap between theoretical knowledge and industry level practical application</li>
            <li>Accelerated experiential learning opportunities</li>
          </ul>
        </div>
      </div>
    </div >
    {/* <div className="App">
      <header className="App-header">
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
      </header>
    </div> */}
  </>
  );
}

export default App;
