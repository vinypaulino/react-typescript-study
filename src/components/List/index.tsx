import React from "react";

function List() {
  const tarefas = [{ tarefa: 'React', tempo: '02:00:00' }, { tarefa: 'Javascript', tempo: '01:00:00'  }]
  return (
    <aside>
      <h2> Estudos do Dia </h2>
      <div>
        {tarefas.map((item, index) => (
          <div key={index}> 
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default List;