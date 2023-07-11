import { useState } from "react"
import "./decor.css"
export default function App() {

  //useStates causes elements to re-render
  const [itemToAdd, setItemToAdd] = useState("")
  const [toDo, setToDo] = useState([])

  function submit(e) {

    e.preventDefault()//prevents page from refreshing
    setToDo((currentList) => {
      return [
        ...currentList,
        {
          id: crypto.randomUUID(), title: itemToAdd, completed: false
        }
      ]
    })

    setItemToAdd("")

  }

  function toggleToDo(id, completed) {
    setToDo(currentList=>{
      return currentList.map(todo => {
        if (todo.id===id) {
          return { ...todo,completed}
        }
        return toDo//if id not matched
      })
    })
  }

  function deleteItem(id) {
    setToDo(currentList=>{
      //return list of all todo items except when passed id matched item.id:
      return currentList.filter(toDo=>toDo.id!=id)
    })
  }
  return <>
    <form className="xyz-form" data-cy="xyz" onSubmit={submit}>
      <div className="form-row" data-cy="row">
        <label htmlFor="new-item">List</label>
        <input type="text" id="new-item" value={itemToAdd}
          onChange={e => setItemToAdd(e.target.value)}></input>
      </div>
      <button className="Btn-class" data-cy="btn">ADD</button>
    </form>
    <h1 className="header">Things To Do:</h1>
    <ul className="list-class" data-cy="list">
    {toDo.map(toDo=> {
      //returning an array
        return (
        <li key={toDo.id}>
        <label>
          <input type="checkbox"
           checked={toDo.completed} onChange={e => toggleToDo(toDo.id, e.target.checked)}></input>
          {toDo.title}
        </label>
        <button className="del-btn-class"
         data-cy="del-btn"
         onClick={()=>deleteItem(toDo.id)}>DEL!</button>
      </li>
      )
      })}
    </ul>
  </>
}
