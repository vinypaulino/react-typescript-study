import React from "react";
import style from "./List.module.scss";

function List() {
  const tasks = [
          { tarefa: 'React', tempo: '02:00:00' }, 
          { tarefa: 'Javascript', tempo: '01:00:00' }, 
          { tarefa: 'Software Architecture', tempo: '02:00:00' }]
  
  return (
    <aside className={style.tasksList}>
      <h2> Estudos do Dia </h2>
      <ul>
        {tasks.map((item, index) => (
            <li key={index} className={style.item}> 
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default List;