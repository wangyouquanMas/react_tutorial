
import React,{useState, useEffect} from 'react';

function MyComponent(){

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(() =>{
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER ADDED");

        return () =>{
            window.removeEventListener("resize",handleResize);
            console.log("Event Listener Removed");
        }

    },[]);


    useEffect(()=>{
        document.title = `Size: ${width} X ${height}`;
    },[width,height]);


    // it will be triggered whenever we scoll the window
    // window.addEventListener("resize",handleResize);
    // console.log("EVENT LISTENER ADDED");

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

   
    // const [count,setCount] = useState(0);
       
    // const [color,setColor] = useState("green");

    // every time the component re-renders, the title will change correspondly
    // useEffect(()=>{
    //     document.title = `Count: ${count}`;
    // });

    // only change once
    // useEffect(()=>{
    //     document.title = `My Counter Program`;
    // },[]);

    // Runs on mount + when value changes
    // useEffect(()=>{
    //     document.title = `Count:${count} ${color}`;



    // },[count,color]);


    // function addCount(){
    //     setCount(c => c+1);
    // }

    // function subtractCount(){
    //     setCount(c => c-1);
    // }

    // function changeColor(){
    //     setColor(c => c === "green" ? "red" : "green");
    // }

    return(<>
     {/* <p style={{color: color}}>Count:{count}</p> */}
      {/* <button onClick={addCount}>Add</button> */}
      {/* <button onClick={subtractCount}>Subtract</button> */}
      {/* <button onClick={changeColor}>Change Color</button>    */}
    
    <p>Window Width: {width}px</p>
    <p>Window Height: {height}px</p>

    </>);
}
export default MyComponent