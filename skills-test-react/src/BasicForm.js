import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import List from '@mui/material/List';
import DeleteIcon from '@mui/icons-material/Delete';

const BasicForm = () => {


const [todos, setTodos] = useState([]);
const [value, setValue] = useState('');

const saveToDo = (toDoTxt) =>{
  //Remove white spaces
  const trimTxt = toDoTxt.trim();
  //Save if not empty
  if (trimTxt.length > 0){
    setTodos([...todos,trimTxt]);
  }
} 

const deleteTodo = (toDoIndex) =>{
  const newTodos = todos.filter((_,index)=>index !== toDoIndex);
  setTodos(newTodos);
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

<List>
  {todos.map((todo ,index) => (
    <ListItem key={index.toString()}>
        <ListItemText primary={todo}/>
        <ListItemSecondaryAction>
            <DeleteIcon 
              onClick={() =>{
                deleteTodo(index);

              }}

            />
          </ListItemSecondaryAction>
      </ListItem>
    ))}
</List>


      
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