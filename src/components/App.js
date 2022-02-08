
function App() {
  window.navigator.geolocation.getCurrentPosition(
    (position)=> console.log(position),
    err=> console.log(err)
  )
  return (
   <div className="">
 
   </div>
  );
}

export default App;
