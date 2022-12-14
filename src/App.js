import { useState } from 'react';
import './App.css';
import YoutubeList from './components/youtube/YoutubeList';
import FormComponent from './components/handingForm/FormComponent';
import { data, users } from './ytbData';
import ListViews from './components/cejs79/ListViews';
import ListViewsMultiForm from './components/cejs79/ListViewsMultiForm';
import UseEffect from './components/cejs79/UseEffect';
import UseEffectFilter from './components/cejs79/UseEffectFilter';
function App() {

  return (
    <div className="App">
      {/* <YoutubeList data={data}></YoutubeList> */}
      {/* <FormComponent></FormComponent> */}
      {/* <ListViews data={users}></ListViews> */}
      {/* <ListViewsMultiForm data={users}></ListViewsMultiForm> */}
      <UseEffect></UseEffect>
      <UseEffectFilter></UseEffectFilter>
    </div>
  );
}

export default App;
