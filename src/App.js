import {useDispatch, useSelector} from "react-redux";
import './App.css';

function App() {
  const store = useSelector(store => store);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch({type: 'LOAD_DATA'})}>Click</button>
      <div className='parts'>
        <div>
          {store.people.map((man, i) => <div key={i}>{man.name}</div>)}
        </div>
        <div>
          {store.planets.map((planet, i) => <div key={i}>{planet.name}</div>)}
        </div>
      </div>

    </div>
  );
}

export default App;
