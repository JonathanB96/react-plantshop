import React,{useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [list, setList]= useState([])
  const [plants, setPlants] = useState([])
  
  useEffect(()=>{
    fetch(`http://localhost:6001/plants`)
    .then((data)=>{return data.json()})
    .then((plants)=>{
      setList(plants)
      setPlants(plants)
    })
   
  },[])

  return (
    <main>
      <NewPlantForm list={list} setList={setList}/>
      <Search list={list} setList={setList} plants={plants}/>
      <PlantList list={list}/>
    </main>
  );
}

export default PlantPage;
