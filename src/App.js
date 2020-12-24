import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo'
import './App.css';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  
  const [input, setInput] = useState('');
  //when the app loads,we need to listen to the database and fetch new todos as they getted added/removed
  //.orderBy('timestamp', 'descnding')
  useEffect(()=>{
    //this code fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (event) =>{
    event.preventDefault(); //will stop refresing
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput(''); //clear up the input
  }
  return (
    <div className="App">
      <h1>Personal TODO App ✈️</h1>
      <form>
      <FormControl>
        <InputLabel>👉Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
      </FormControl>
      <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={addTodo}>
        Add Todo
      </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
