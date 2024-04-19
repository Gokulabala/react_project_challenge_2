import { useState, useEffect } from "react";
import Display from "./Components/Display";
import Headers from "./Components/Headers";


function App() {
  const url = `https://jsonplaceholder.typicode.com/`
  
  const [reqType, setreqType] = useState('users')
  const [items, setItems] = useState([])  
  
  useEffect(()=>{
    const fetchData = async()=>{
      try {       
        const response = await fetch(`${url}${reqType}`)
        // console.log(response)
        const data = await response.json()
        console.log(data)
        setItems(data)
      } catch (error) {
        console.log(error)
      }
    }

    (async()=> await fetchData())()
  },[reqType])

  console.log(items)
  return (
    <div className="App" >
      <Headers 
      reqType = {reqType}
      setreqType = {setreqType}
      />
      <Display
      items = {items}
      />
    </div>
  );
}

export default App;
