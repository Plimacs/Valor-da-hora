import { useState, useEffect } from 'react';

function HoraAtual() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    currentTime.toLocaleTimeString()
  );
}

export default HoraAtual;
