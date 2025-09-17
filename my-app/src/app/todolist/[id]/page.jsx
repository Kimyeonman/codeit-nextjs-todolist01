"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const TodoItemPage = () => {
  const params = useParams();
  const { id } = params;

  const [todo, setTodo] = useState(null);

  useEffect(()=>{
    const getTodoitem = async() => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos/${id}`)
      const item = await response.json();
      console.log(item);
      setTodo(item);
    };
    getTodoitem();
  }, []);

  return (
    <div>
      rwar
    </div>
  )
}

export default TodoItemPage