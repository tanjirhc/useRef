import { useState, useEffect, useRef } from 'react';

function MyComponent(){

  let [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Component Rendered");
  })

  function handleClick(){
    setNumber(n => n + 1);
  }

  return(
  <button onClick={handleClick}>
    Click Me
  </button>)
}
export default MyComponent;