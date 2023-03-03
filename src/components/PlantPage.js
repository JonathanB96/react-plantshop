import React,{useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [list, setList]= useState([])
  useEffect(()=>{
    fetch(`http://localhost:6001/plants`)
    .then((data)=>{return data.json()})
    .then((plants)=>{
      setList(plants)
    })
   
  }, [])

  return (
    <main>
      <NewPlantForm list={list} setList={setList}/>
      <Search />
      <PlantList list={list}/>
    </main>
  );
}

export default PlantPage;
