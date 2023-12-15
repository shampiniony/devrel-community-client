import { useEffect, useState } from 'react';

export const Plugins = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [worker, setWorker] = useState<Worker | null>(null);

  useEffect(() => {
    // Initialize worker
    const newWorker = new Worker('./../workers/worker.ts');
    setWorker(newWorker);

    // Listen for messages from the worker
    newWorker.onmessage = (e) => {
      setOutput(e.data);
    };

    // Clean up
    return () => {
      newWorker.terminate();
    };
  }, []);

  const runCode = () => {
    worker?.postMessage(code);
  };

  return (
    <div className='bg-white text-black'>
      <textarea value={code} onChange={(e) => setCode(e.target.value)} />
      <button onClick={runCode}>Run</button>
      <div>Output: {output}</div>
    </div>
  );
};
