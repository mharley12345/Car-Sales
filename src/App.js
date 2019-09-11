import React,{Component} from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      car:''
    };

    const removeFeature = (feature) => {
    feature.props.removeFeature(feature);
    return removeFeature(this.feature)
  }

  const buyItem = props => {
    // dipsatch an action here to add an item
  }
};
render(){
  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures removeFeature={this.removeFeature} feature={this.state.feature}/>
      </div>
      <div className="box">
        <AdditionalFeatures  />
        <Total />
      </div>
    </div>
  );
};
}

export default App;
