import React from 'react';
import  connnect from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {removeFeature, addFeature} from './actions'


function App(){
  

  removeFeature = (feature) => {
    this.dispatch({type:"REMOVE_FEATURE" , payload:feature})
  }
     
  

  const buyItem = props => {
    // dipsatch an action here to add an item
  }


  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total />
      </div>
    </div>
  );
  }
export default App;
