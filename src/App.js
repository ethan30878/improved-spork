import { useRef, useState } from "react";
import './App.css';

function App() 
{
  const [task, setTask] = useState([]);
  const inputRef = useRef(null);

  const addItem = (item) => 
  {
    const newItem = inputRef.current.value;
    if (newItem !== "")
      setTask([...task, newItem]);
    inputRef.current.value = "";
  }

  const removeItem = (index) =>
  {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <input type="text" placeholder="Enter an item" ref={inputRef} />
      <ul>
          {task.map((todo, i) => (
            <li className="li-item" key={i}> {todo}
              <span onClick={() => removeItem(i)}>X</span>
            </li>
          ))}
      </ul>
      <button class="custom-btn" onClick={addItem}>Add</button>
    </div>
  );
}

export default App;
