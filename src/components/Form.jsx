import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addToDo, changeToDo } from "../redux/actions";

const Form =(editTodo, editForm, cancelUpdate) => {
    const dispatch = useDispatch();
    
    const [todoValue, setTodoValue] = useState('');

    const [editValue, setEditValue] = useState('');

    useEffect(()=>{
        setEditValue(editTodo.todo);
    }, [editTodo])

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj = {
            id: time,
            todo: todoValue,
            completed: false 
        }
        setTodoValue('');
        dispatch(addToDo(todoObj))
        console.log(todoObj);
    };

    const editSubmit = (e) =>{
        e.preventDefault();
        let editedtodoObj = {
          id: editTodo.id,
          todo: editValue,
          completed: false
        }
        dispatch(changeToDo(editedtodoObj))
      }

    return(
        <>
        {/* {editForm===false?( */}
        <form className="form-group custom-form" onSubmit={handleSubmit}>
            <label>What's the plan for today?</label>
            <div className='input-and-btn'>
                <input type="text" className='form-control' required value={todoValue} onChange={(e) => setTodoValue(e.target.value)}/>
                <button type="submit" className='btn btn-secondary btn-md'>ADD</button>
            </div>
        </form>
        {/* ):( */}
        <form className='form-group custom-form' onSubmit={editSubmit}>
          <label>Update your plan-items</label>
          <div className='input-and-btn'>
              <input type="text" className='form-control' required value={editValue} onChange={(e)=>setEditValue(e.target.value)}/>
              <button type="submit" className='btn btn-secondary btn-md'>UPDATE</button>
          </div>
          <button type="button" className='btn btn-primary btn-md back-btn' onClick={cancelUpdate}>BACK</button>
          </form>
        {/* )}  */}
        </>
    );
};

export default Form;