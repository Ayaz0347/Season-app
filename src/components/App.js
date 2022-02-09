import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      speed:null,
      errMsg:null,
      // long: null,
    };

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
 if(this.state.errMsg && !this.state.lat){
   return <div>
     Error : {this.state.errMsg}
   </div>
 }else if(!this.state.errMsg && this.state.lat){
  return <div>Latitude:{this.state.lat}</div>
 }
 else{
   return <div>Loading..</div>
 }
}

}
export default App;
