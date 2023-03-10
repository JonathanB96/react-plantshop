import React,{useState} from "react";

function NewPlantForm({list, setList}) {
  const [name, setName]= useState("")
  const [url, setUrl]= useState("")
  const [price, setPrice]= useState("")
 
  function handleSubmit(e){
   e.preventDefault()
   fetch(`http://localhost:6001/plants`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"},
    body: JSON.stringify({name: name, 
    image: url, price: price})
   }).then((r)=>{
    if(r.ok){
      r.json().then((newPlant)=>{
        setList([...list, newPlant])
      })
    }
   })
  }
  function handleName(e){
    setName(e.target.value)
  }
  function handleUrl(e){
    setUrl(e.target.value)
  }
  function handlePrice(e){
    setPrice(e.target.value)
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleName} value={name}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleUrl} value={url}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePrice} value={price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
