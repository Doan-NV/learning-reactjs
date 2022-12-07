import './App.css';
import YoutubeList from './components/youtube/YoutubeList';
import { data } from './ytbData';
import Toggle from './components/state/Toggle';
function App() {
  return (
    <div className="App">
      <div>
      <Toggle></Toggle>
      <YoutubeList data={data}></YoutubeList>
      </div>
    </div>
  );
}

export default App;
