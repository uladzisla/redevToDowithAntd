import ToDo from "./Components/ToDo/ToDo";
import CustomInput from "./Components/CustomInput/CustomInput";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "задача 1", state: true },
  ]);

  return (
    <div>
      <h1>Список задач</h1>
      <CustomInput tasks={tasks} setTasks={setTasks} />
      {tasks.map((item) => (
        <div key={item.id}>
          <ToDo item={item} tasks={tasks} setTasks={setTasks} />
        </div>
      ))}
    </div>
  );
}

export default App;
