import { useState } from "react";
import * as C from "./App.styles";
import { AddArea } from "./components/AddArea";
import { ListItem } from "./components/ListItem";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Comprar pão",
      done: false,
    },
    {
      id: 2,
      name: "Comprar Café",
      done: true,
    },
  ]);

  const handleAddTask = (taskname: string) => {
    let newList = [...list]

    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false
    })

    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        {/* Adicionar nova tarefa */}
        <AddArea addTask={handleAddTask}/>

        {/* Listar Tarefa */}
        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
