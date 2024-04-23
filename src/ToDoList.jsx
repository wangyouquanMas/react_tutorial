import React,{useState} from 'react';

function ToDoList(){
    
    const [tasks,setTasks] = useState(["Eat Breakfast","Take a shower","Walk the dog"]);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index){

        const updateTasks = tasks.filter((_,i) => i !== index);
        setTasks(updateTasks);
    }

    function moveTaskUp(index){
        if(index>0){
            const updateTasks = [...tasks];
            [updateTasks[index],updateTasks[index-1]] = 
            [updateTasks[index-1],updateTasks[index]];      //swap two elements within an array
            setTasks(updateTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updateTasks = [...tasks];
            [updateTasks[index],updateTasks[index+1]] = 
            [updateTasks[index+1],updateTasks[index]];      //swap two elements within an array
            setTasks(updateTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input 
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}>
                </input>
                <button
                    className="add-button"
                    onClick={addTask}>
                      AddTask      
                </button>
            </div>

            <ol>
                {tasks.map((task,index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button
                            className="delete-button"
                            onClick={()=>deleteTask(index)}>
                            Delete
                        </button>
                        <button
                            className="move-button"
                            onClick={()=>moveTaskUp(index)}>
                            Up
                        </button>
                        <button
                            className="move-button"
                            onClick={()=>moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>

        </div>        
    );
}
export default ToDoList