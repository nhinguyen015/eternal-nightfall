import map from './assets/Valethorn_World_Map.png'
import menu from './assets/paper.png'
import './App.css'

function App() {
  return (
    <div className="App">
        <p className='title'> ETERNAL NIGHTFALL </p>
        <div className='WorldMap'>
          <img src={map} className='map'/>
        </div>
        {/* This class is for Menu content options */}
        <div className='MenuScreen'>
          <img src={menu} />
          <button className='inventory'>Inventory</button>
          <button className='party-info'>Party Info</button>
          <button className="quest" onClick={() => {}}>Quest</button>
          <button className='notes'>Notes</button>
          
          
          
        </div>

    </div>
  );
}

// const theme = {
//   default: "#ffffff;",
//   hover: " #808080"
// };

// const Button = styled.div`
//   background-color: ${(props) => theme[props.theme].default};
//   color: white;
//   padding: 5px 15px;
//   border-radius: 5px;
//   outline: 0;
//   text-transform: uppercase;
//   margin: 10px 0px;
//   cursor: pointer;
//   box-shadow: 0px 2px 2px lightgray;
//   transition: ease background-color 250ms;
//   &:hover {
//     background-color: ${(props) => theme[props.theme].hover};
//   }
//   &:disabled {
//     cursor: default;
//     opacity: 0.7;
//   }

// `;

export default App;


