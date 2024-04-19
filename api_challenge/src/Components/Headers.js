import Button from "./Button"


const Headers = ({reqType, setreqType,handleClick})=>{

    return(
       <div>       
       <form className="headers" onSubmit={(e)=>e.preventDefault()}>
            <Button 
            buttonText = 'users'
            reqType = {reqType}
            setreqType = {setreqType}
            handleClick = {handleClick}
            />
            <Button 
            buttonText = 'posts'
            reqType = {reqType}
            setreqType = {setreqType}
            handleClick = {handleClick}
            />
            <Button 
            buttonText = 'comments'
            reqType = {reqType}
            setreqType = {setreqType}
            handleClick = {handleClick}
            />            
        </form>
        </div>
    )
}

export default Headers