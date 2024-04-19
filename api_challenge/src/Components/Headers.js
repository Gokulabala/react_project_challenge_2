import Button from "./Button"


const Headers = ({reqType, setreqType})=>{

    return(
       <div>       
       <form className="headers" onSubmit={(e)=>e.preventDefault()}>
            <Button 
            buttonText = 'users'
            reqType = {reqType}
            setreqType = {setreqType}
            />
            <Button 
            buttonText = 'posts'
            reqType = {reqType}
            setreqType = {setreqType}
            />
            <Button 
            buttonText = 'comments'
            reqType = {reqType}
            setreqType = {setreqType}
            />            
        </form>
        </div>
    )
}

export default Headers