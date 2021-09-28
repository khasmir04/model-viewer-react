// import logo from './logo.svg';
import './App.css';
import './Custom.css';
import './components/ModelViewer';
import ModelViewer from './components/ModelViewer';
import { useState } from 'react'

function App() {
  let [activeTab, setActiveTab] = useState('ship');

  const switchTab = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="flex bg-gray-400 mx-auto w-6/12 items-center mb-6">
          <div
            className={"hover:bg-white hover:text-black border-2 border-gray-400 cursor-pointer w-full tab " + (activeTab === "ship" ? 'active' : '')}
            onClick={() => switchTab("ship")}>Ship</div>
          <div
            className={"hover:bg-white hover:text-black border-2 border-gray-400 cursor-pointer w-full tab " + (activeTab === "location" ? 'active' : '')}
            onClick={() => switchTab("location")}>Location</div>
        </div>
        <div className="flex justify-center">
          <ModelViewer />
        </div>
      </div>
    </div>
  );
}

export default App;
