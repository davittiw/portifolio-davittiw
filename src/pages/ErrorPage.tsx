import React from 'react'

import { Navigate, useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate()
    const handleClick = () => {
      return navigate("/")
    } 

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center text-white">
      <img
        src="https://i.pinimg.com/originals/14/64/ad/1464adb13da922871b26fddbc8e52631.gif"
        alt=""
        className='w-[50%] md:w-[20%] rounded-lg'
      />
      <div className="flex space-y-3 flex-col items-center mt-10 text-lg">
        <h1>Infelizmente, você se perdeu no caminho :(</h1>
        <p>Retorne à <button onClick={handleClick} className='underline cursor-pointer text-blue-400'>página inicial</button>.</p>
      </div>
    </main>
  );
}

export default ErrorPage