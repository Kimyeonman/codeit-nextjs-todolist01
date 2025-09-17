"use client"
import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react';
const todoList = () => {
  const [todos, setTodos] = useState([]);
  
  
  useEffect (()=> {
    const fetchData = async ()=>{
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`);
      const data = await response.json();
      setTodos(data);
      console.log(data);
    }
    fetchData();
  },[]);

  const changebtn = async(todo) => {
    try{
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${todo.id}`,{
        method: "PATCH", 
        body: JSON.stringify({
          isCompleted: !todo.isCompleted,
        }),
      });

      setTodos((prev)=>{
        return prev.map(function(x){
          if(x.id === todo.id){
            return{
              ...x,
              isCompleted: !x.isCompleted,
            }
          }
          else{
            return x;
          }
        });
      });


    }
    catch(error){
      console.log(error);
    }
  }


  const deletebtn = async(todoId) => {
    try{
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${todoId}`,{
        method: "DELETE",
      });
      setTodos(function(prev){
        return prev.filter((x)=>{
          return x.id !== todoId;
        })
      });
      
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <h1>게시판</h1>
      {todos.map((todo)=>{
        return(
          <div key={todo.id} className='flex justify-between'>
            <Link href={`/todos/${todo.id}`}>
              <div>
                {todo.title}
              </div>
            </Link>
            <div className='flex gap-3'>
              <button className='border' onClick={()=>changebtn(todo)}>
                {todo.isCompleted === true ? "완료": "진행 중"}
              </button>
              <button className='border' onClick={()=>deletebtn(todo.id)}>삭제</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default todoList