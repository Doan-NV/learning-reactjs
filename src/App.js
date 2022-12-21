import { useState } from 'react';
import './App.css';
import YoutubeList from './components/youtube/YoutubeList';
import FormComponent from './components/handingForm/FormComponent';
import { data } from './ytbData';
function App() {

  return (
    <div className="App">
      <YoutubeList data={data}></YoutubeList>
      {/* <FormComponent></FormComponent> */}
    </div>
  );
}

export default App;
