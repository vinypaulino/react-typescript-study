import React, { useState } from "react";
import Item from "./Item";
import style from "./List.module.scss";

function List() {
  const [tasks, setTasks] = useState([
          { task: 'React', time: '02:00:00' }, 
          { task: 'Javascript', time: '01:00:00' }, 
          { task: 'Software Architecture', time: '02:00:00' }])  
  
  return (
    <aside className={style.tasksList}>
      <h2 onClick={() => {
        setTasks([...tasks, {task: "Estudar estado", time: "05:00:00"}])
      }}> Estudos do Dia </h2>
      <ul>
        {tasks.map((item, index) => (
           <Item key={index} {...item}/>
        ))}
      </ul>
    </aside>
  )
}

export default List;