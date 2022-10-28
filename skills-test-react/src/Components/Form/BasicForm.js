import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import DeleteIcon from '@mui/icons-material/Delete';

import {useDispatch, useSelector} from 'react-redux';
import {saveData, deleteData} from '../../Redux/Actions/TodoActions';

//Table Imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BasicForm = () => {


const [value, setValue] = useState('');

const dispatch = useDispatch();
const toDoArr = useSelector((state)=>state.todoData.todos);



const saveToDo = (toDoTxt) =>{
  //Remove white spaces
  const trimTxt = toDoTxt.trim();
  //Save if not empty
  if (trimTxt.length > 0){
    dispatch(saveData(trimTxt));
  }
} 

const deleteTodo = (toDoIndex) =>{
  dispatch(deleteData(toDoIndex));
}

  return(
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={(values) => {}}
      >
        <Form
        onSubmit={(event)=>{
          event.preventDefault();
          saveToDo(value);
          setValue('');
        }}
        >
          <label htmlFor="todo">Add ToDo </label>
          <Field id="todo" name="Add ToDo" placeholder="TextHere" 
          onChange={(event)=>{
            setValue(event.target.value);
          }}     
          value={value}      
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <Paper sx={{margin:'2%'}}>
                <TableContainer component={Paper}>
                <Table>
            
                  <TableHead>
                      <TableRow>
                        <TableCell>ToDo List</TableCell>
                      </TableRow>
                  </TableHead>
                <TableBody>
                {toDoArr.map((todo ,index) => (
                  <TableRow key={index.toString()}>
                  <TableCell>{todo}</TableCell>
                    <TableCell>
                      <DeleteIcon 
                      onClick={() =>{
                        deleteTodo(index);
                      }}
                  />
                    </TableCell>
                  </TableRow>

                  
                ))}
                </TableBody>

      
                </Table>

                </TableContainer>


      </Paper>

    </div>
  );
};
export default BasicForm


/*

1) Create states

2)update user input as string in one state string. first onchange ? 

3)On submit -> add that user input string to another state Arr

4) map over Arr and present to user including keys



Redux
1) Get the user input to update the redux state
  Action carrying the payload of userinput
    -on change call the action similar to how we are doing it right now in the regular state

2) Reducer grabs that userinput and updates the ARR of Tasks state

3) Deleting need to get the index/key of that item
  - Action on click -> send index/key using payload (or custom names)
  -> Reducer who will remove that index from the state


4) Separation of concerns? MDP OR MSP ? Container element with all dispatch + state logic
passing as props to the actual page similar to MVC 






*/