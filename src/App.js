import './App.css';
import YoutubeList from './components/youtube/YoutubeList';
import { data } from './ytbData';
import Toggle from './components/state/Toggle';
function App() {
  return (
    <div className="App">
      <YoutubeList data={data}></YoutubeList>
    </div>
  );
}

export default App;
