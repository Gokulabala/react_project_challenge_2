import { useState, useEffect } from "react";
import Display from "./Components/Display";
import Headers from "./Components/Headers";


function App() {
  const url = `https://jsonplaceholder.typicode.com/`
  
  const [reqType, setreqType] = useState('users')
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)  
  
  useEffect(()=>{
    const fetchData = async()=>{
      
      try {   

        const response = await fetch(`${url}${reqType}`)
        // console.log(response)
        
        const data = await response.json()
        // console.log(data)
        
        setItems(data)
      } catch (error) {
        console.log(error)
      }finally{
        setIsLoading(false)
      }
    }
    setTimeout(()=>{
      (async()=> await fetchData())()
    },2000)
    
  },[reqType])

  console.log(items)
  return (
    <div className="App" >
      <Headers 
      reqType = {reqType}
      setreqType = {setreqType}
      handleClick={() => setIsLoading(true)}
      />
      <main>
        {isLoading && <p>Loading Data...</p>}
        {!isLoading && <Display
          items = {items}
          />}
      </main>
        
      
    </div>
  );
}

export default App;
