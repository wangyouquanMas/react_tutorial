import { useCallback } from "react";

function Button(){

    // inner function
    // const handleClick = () => console.log("OUCH!");

    // has parameters
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);


    // let count = 0;
    // const handleClick = (name) =>{
    //     if(count < 3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`);
    //     }else{
    //         console.log(`${name} stop clicking me!`);
    //     }
    // }
    
    const handleClick = (e) => {
        e.target.textContent = "OUCH!";
        console.log(e);
    };

    
    return(
      /* if you add a set of parentheses after a callback , you'll invoke it right away */
    //   <button onClick={handleClick2("test")}>Click me</button>
        
        // if we have arguments we need to send  to a function we could wrap this useCallback
        // within a function expression or an arrow function
    //   <button onClick={()=>handleClick2("test")}>Click me</button>
        // <button onClick={()=>handleClick("test")}>Click me</button>

        // <button onClick={(e)=>handleClick(e)}>Click me</button>
        
        <button onDoubleClick={(e)=>handleClick(e)}>Click me</button>
      
    );
}

export default Button