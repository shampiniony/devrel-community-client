import axios from 'axios';
import { useState } from 'react';

export const GptModel = () => {
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');

  const askGpt = (message: string) => {
    axios
      .post(`http://reldev.shampiniony.ru/api/ask-gpt/`, {
        message: message,
      })
      .then((res) => {
        setOutput(res.data);
      });
  };

  return (
    <div className='w-1/2 bg-second-primary rounded-xl flex flex-col gap-5 p-5'>
      <h1 className='font-bold text-3xl'>ask gpt</h1>
      <div className='bg-primary rounded-lg h-3/6 p-5 overflow-scroll no-scrollbar'>{output}</div>
      <textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className='bg-primary rounded-lg h-2/6 p-5 resize-none'
      ></textarea>
      <div
        onClick={() => {
          askGpt(input);
        }}
        className='bg-primary rounded-lg h-1/6 flex justify-center items-center font-bold cursor-pointer'
      >
        Ask
      </div>
    </div>
  );
};
