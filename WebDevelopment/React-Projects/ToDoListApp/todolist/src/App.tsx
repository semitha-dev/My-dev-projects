import React, {FormEvent, useState} from "react";
import "./App.css";




interface objtodo{
  id:number;
  text:string;
  completed:boolean

}
const App = () => {
  const [todos, setTodos] = useState<objtodo[]>([]);
  const [newtodo,setNewtodo] = useState("");
  
  // Add the handlesubmit code here
  const handlesubmit = (event: FormEvent<HTMLFormElement>) =>{

    event.preventDefault();

    const objtodo = {
      id:new Date().getTime(),
      text:newtodo.trim(),
      completed:false
    }

    if(objtodo.text.length > 0 ){
      setTodos([...todos, objtodo])
    }
    else{
      alert("Please Add A valid Task.")
    }

    setNewtodo("");



  }
  
  
  // Add the deleteToDo code here
  const deleteToDo = (id : number)=>{

    let updatetodos =[...todos].filter((todo) =>  todo.id !== id);

    setTodos(updatetodos);



  }
  
  // Add the toggleComplete code here

  
  // Add the submitEdits code here

  
return(
<div className ="App">
<h1>Todo List</h1>
<form onSubmit={handlesubmit}>
<input
type="text"
id="todoAdd"
value={newtodo}
onChange={(e) => setNewtodo(e.target.value)}

placeholder="Enter You Task"
/>
<button type ="submit">Add Todo</button>
</form>
<ul className="list">
  {todos.map((name , index) =>(
    <li key={index} className="todosListShow">
      <h2>{name.text}<input type="checkbox" /></h2>
    
      <button onClick={() => deleteToDo(name.id)}>Delete</button>
    </li>
  ))}

</ul>
</div>
);
};
export default App;