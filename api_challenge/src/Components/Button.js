

const Button =({buttonText, reqType, setreqType,handleClick})=>{
    return(
        <button 
            className={buttonText === reqType ? "selected" : null}
            type = "button"
            onClick={()=>{setreqType(buttonText)
                handleClick()}    }   
        >
            {buttonText}
        </button>
    )
}

export default Button