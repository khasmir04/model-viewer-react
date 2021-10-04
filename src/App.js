// import logo from './logo.svg';
import './App.css';
import './index.css';
import './Custom.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import ModelViewerObj from './components/ModelViewerObj';
import ModelViewerFbx from './components/ModelViewerFbx';
import ModelViewerGltf from './components/ModelViewerGltf';
import { useState } from 'react'

function App() {
  let [activeTab, setActiveTab] = useState('ship');

  const switchTab = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="App text-center select-none">
      <Header />
      <section id="main" className="container mx-auto h-[calc(100vh-160px)] text-center">
        <div className="flex mx-auto w-6/12 items-center pt-6 mb-6">
          <div
            className={"hover:bg-white hover:text-black border-2 text-center text-xs md:text-xl text-white bg-gray-400 border-gray-400 cursor-pointer w-full tab " + (activeTab === "ship" ? 'active' : '')}
            onClick={() => switchTab("ship")}>Ship Type</div>
          <div
            className={"hover:bg-white hover:text-black border-2 text-center text-xs md:text-xl text-white bg-gray-400 border-gray-400 cursor-pointer w-full tab " + (activeTab === "area" ? 'active' : '')}
            onClick={() => switchTab("area")}>Exercise Area</div>
        </div>
        <div className="flex justify-center">
          {
            activeTab === "ship" ?
              // For Ship Type
              <ModelViewerFbx />
              :
              // For Location
              <ModelViewerGltf />
          }
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
