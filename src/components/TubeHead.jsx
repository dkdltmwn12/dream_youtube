import React, { useEffect, useState } from 'react'
import { BsSearch, BsYoutube } from "react-icons/bs";
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function TubeHead() {
  const {search} = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const onSubitHandle = (e) => {
    e.preventDefault();
    setText('');
    navigate(`/result/${text}`);
  };

  const onChangeHandle = (e) => {
    setText(e.target.value);
  }

  useEffect(() => setText(search || ''), [search]);
  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center'>
        <BsYoutube className='text-4xl text-brand'/>
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={onSubitHandle}>
        <input
        className='w-7/12 p-2 outline-none bg-black text-gray-50'
        value={text}
        onChange={onChangeHandle}
        type='text'
        placeholder='Search' />
        <button className='bg-zinc-600 px-4'><BsSearch/></button>
      </form>
    </header>
  )
}
