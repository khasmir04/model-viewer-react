// import logo from './logo.svg';
import './App.css';
import './Custom.css';
import Header from './components/Header';
import ModelViewerObj from './components/ModelViewerObj';
import ModelViewerFbx from './components/ModelViewerFbx';
import { useState } from 'react'

function App() {
  let [activeTab, setActiveTab] = useState('ship');

  const switchTab = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <Header />
      <section id="main" className="container mx-auto h-[calc(100vh-80px)]">
        <div className="flex mx-auto w-6/12 items-center pt-6 mb-6">
          <div
            className={"hover:bg-white hover:text-black border-2 text-white bg-gray-400 border-gray-400 cursor-pointer w-full tab " + (activeTab === "ship" ? 'active' : '')}
            onClick={() => switchTab("ship")}>Ship</div>
          <div
            className={"hover:bg-white hover:text-black border-2 text-white bg-gray-400 border-gray-400 cursor-pointer w-full tab " + (activeTab === "location" ? 'active' : '')}
            onClick={() => switchTab("location")}>Location</div>
        </div>
        <div className="flex justify-center">
          {
            activeTab === "ship" ?
              // For Ship
              <ModelViewerFbx />
              :
              // For Location
              <ModelViewerObj />
          }
        </div>
      </section>
    </div>
  );
}

export default App;
