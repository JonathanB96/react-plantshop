import React,{useEffect,useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({list}) {

  return (
    <ul className="cards">{list.map((plant)=>{
      return <PlantCard plant = {plant}/>
    })}</ul>
  );
}

export default PlantList;
