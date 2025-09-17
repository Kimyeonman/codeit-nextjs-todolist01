"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const newTodoPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  
  const submit = async(x) =>{
    x.preventDefault();
    try{
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todos`,{
        method: "POST",
        body: JSON.stringify({
          title,
          isCompleted: false,
          createdAt: new Date().toISOString(),
        }),
      });
      router.push("/todolist");
    }
    catch(error){
      console.log("생성오류"+error);
    }
  };
  const change = (e) => {{
    setTitle(e.target.value);
  }};

  return (
    <div>
      <h1>게시판 생성</h1>
      <form name="form"onSubmit={submit}>  
        <input className='boredr bg-gray' name='input' value={title} onChange={change}></input>
        <button className='boredr bg-gray' type='submit'>생성</button>
      </form>
    </div>
  )
}

export default newTodoPage