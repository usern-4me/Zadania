import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {
  const initialList = [
    "Zrobić zakupy",
    "Zrobić pranie",
    "Posprzątać w domu",
    "Zrobić obiad",
  ]

  const [todo, setTodo] = useState(initialList);
  const [search, setSearch] = useState("");

  const deleteItem = (index) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };

  return (
    <>
    <div className='cale'>
      <input className='impser' placeholder="Search"
        onChange={
          (event) => setSearch(event.target.value)
        }
      />
      <ul className='tlolisty'>
        { todo
        .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
        .map((item, index) => (
          <li className='tlolisty'
           key={index}>
            {item} 
            <button onClick={() => deleteItem(index)} className='delete-button'>Delete</button>
          </li>
        ))}
      </ul>

      <form className='form'>
        <input className='impdod'/>
        <button className='submitb'
          onClick={
            (event) => {
              event.preventDefault();
              setTodo([...todo, event.target.previousElementSibling.value]);
            }
          }
        >
          Dodaj
        </button>
      </form>
      </div>
    </>
  );
}

export default App;