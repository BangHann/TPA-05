import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import { MdRestoreFromTrash, MdEdit } from 'react-icons/md';
import styles from '../styles/Todos.module.css';
import { removeToDo, handleCheckbox } from '../redux/actions';

export const Todos = ({changeToDo}) => {
    const dispatch = useDispatch();
    // const [ editTodo, setEditTodo]=useState('');
    // const changeToDo=(todo)=>{
    //     setEditTodo(todo);
    // }
    const todos = useSelector((state) => state.todosReducer);
    return todos.map((todo)=>(
        <div key={todo.id} >
            <div className={styles.wrapper}>
            {/* {editForm===false&&( */}
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
            {/* )} */}
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        
        <div >
              {/* {editForm===false&&( */}
                <>
                  <span onClick={()=> changeToDo(todo)}><MdEdit/></span>
                    <span onClick={() => dispatch(removeToDo(todo.id))}><MdRestoreFromTrash/></span>                  
                </>
              {/* )} */}
        </div>
        </div>
    </div>
  ))
}

export default Todos;