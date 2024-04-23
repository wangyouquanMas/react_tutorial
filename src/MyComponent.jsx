import React, {useState} from 'react';

function MyComponent(){

    // let [name,setName] = useState();
    
    // cannot change the content in virtual DOM
    // const updateName = () => {
    //     name = "Spongebob";
    //     console.log(name);
    // }

    // we need to use set fn , it triggers the render of virtual DOM
    // const updateName = () => {
    //     setName("Spongebob");
    // }

    //you can pass a initial state
    let [name,setName] = useState("Guest");
    const updateName = () => {
        setName("Spongebob");
    }


    const [age, setAge] = useState(0);
    const incrementAge = () =>{
        setAge(age + 1);
    }

    const [isEmployed,setIsEmployed] = useState(false);
    const toggleEmplyedStateus = () =>{
        setIsEmployed(!isEmployed);
    }


    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>IsEmployed: {isEmployed ? "YES" : "NO"}</p>
            <button onClick={toggleEmplyedStateus}>Toggle status</button>
        </div>
        );
}
export default MyComponent