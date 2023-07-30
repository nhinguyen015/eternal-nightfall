import map from './assets/Valethorn_World_Map.png'
import menu from './assets/paper.png'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Inventory from './components/Inventory'
import PartyInfo from './components/PartyInfo'
import Quest from './components/Quest'
import Notes from './components/Notes'
import style from './App.css'

function App() {
  return (
    <><div className='Title'>
      <p className='title'> ETERNAL NIGHTFALL </p>
    </div>
    <div className='WorldMap'>
      <img src={map} className='map'/>
    </div>
    <div className='MenuScreen'>
      <img className='MenuScreen.menu' src={menu}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="inventory" element={<Inventory />}/>
            <Route path="party-info" element={<PartyInfo />} className="party-info"/>
            <Route path="quest" element={<Quest />} className="quest"/>
            <Route path="notes" element={<Notes />} className="notes"/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div></>
    

    // <div className="App">
    //     <p className='title'> ETERNAL NIGHTFALL </p>
    //     <div className='WorldMap'>
    //       <img src={map} className='map'/>
    //     </div>
    //     {/* This class is for Menu content options */}
    //     <div className='MenuScreen'>
    //       <img src={menu} />
    //       <button className='inventory'>Inventory</button>
    //       <button className='party-info'>Party Info</button>
    //       <button className="quest" onClick={() => {}}>Quest</button>
    //       <button className='notes'>Notes</button>
    //     </div>
    // </div>
  );
}

export default App;


