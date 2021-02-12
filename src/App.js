import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{useState}from "react";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";

let App=()=>{
  const [city,setCity]=useState("");
  let [info,setinfo]=useState([]);
 let val=[];
  let weatherinfo=()=>{

console.log(city);
let url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`;
 fetch(url).then((response)=>response.json()).then(data=>{
  let info1=data.main;
  // let info1=JSON.stringify(data.main)
  // console.log(info1);
  for (let i in info1)
  {
    if (info1.hasOwnProperty(i))
    {
    val.push(`${i}: ${"   "}${info1[i]} `);
    }
  }
  setinfo(val)
  return info1;}); 

}
  return (
    <>
  <CityInput city={city} setCity={setCity} weatherinfo={weatherinfo}/>
  <CityWeather info={info}/>
  </>
  );
}
export default App;