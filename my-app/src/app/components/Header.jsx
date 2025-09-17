import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div >
      <div className='flex justify-between'>
        <Link href={"/"}>HOME</Link>
        <nav className='flex gap-[40px]'>  
          <Link href={"/todolist"}>todolist</Link> 
          <Link href={"/newTodo"}>newTodo</Link>
        </nav>
      </div>
    </div>
    
  )
}

export default Header