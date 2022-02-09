import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
class App extends React.Component {

  state = {
    lat: null,
    speed:null,
    errMsg:null,
    // long: null,
  };
  constructor(props) {
    super(props);
    // this.state = {
    //   lat: null,
    //   speed:null,
    //   errMsg:null,
    //   // long: null,
    // };

    
  }
  componentDidMount(){
    console.log("didmount")
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
          acc: position.coords.accuracy,
          // speed:position.coords.speed,
        });
      },
      (err) => {this.setState({errMsg:err.message})}
    );
  }
  componentDidUpdate(){
    console.log("updated")

  }
  renderContent(){
    if(this.state.errMsg && !this.state.lat){
      return <SeasonDisplay lat={this.state.errMsg} message='Error'/>
    }
    
    else if(!this.state.errMsg && this.state.lat){
     return <SeasonDisplay lat={this.state.lat} message='Latitude'/>
    }
    
    else{
      return <Spinner message="Please accept location request"/>
    }
  }

  render() {
  //   return (<div>
  //     <hr/>
  //     Latitude: {this.state.lat}
  //     <hr/>
  //     longitude:{this.state.long}
  //     <hr/>
  //     Accuracy: {this.state.acc}
  //     <hr/>
  //     {/* Speed:{this.state.speed} */}
  //     Error Message: {this.state.errMsg}
  //     </div>)
  // }
return (
  <div className="border red">
    {this.renderContent()}
  </div>
);

}

}
export default App;
