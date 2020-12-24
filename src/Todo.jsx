//rfce React Functional Component with Export
import React, { useState } from 'react';
import './Todo.css'
import { Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
function Todo(props) {
    
    const classes = useStyles();
    const [open, setOpen]=useState(false);
    const [input, setInput]=useState(props.todo.todo);

    const handleOpen = () => {
        setOpen(true);
    }
    const updateTodo = () =>{
        //update Todo with new input text

        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true});
        setOpen(false);
    }
    return (
        <>
        <Modal
        open={open}
        onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>Warning</h1>
                <input value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar />
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰" />
            </ListItem> 
            <Button onClick={e => setOpen(true)} variant="contained" color="warning">Edit</Button>
            <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}>
                 DELETE ME
            </DeleteIcon>
        </List>
        </>
    )
}

export default Todo
