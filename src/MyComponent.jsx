import { useState, useEffect, useRef } from 'react';

function MyComponent(){

  const ref = useRef(0);

  useEffect(() => {
    console.log("Component Rendered");
  })

  function handleClick(){
    ref.current++;
    console.log(ref.current);
  }

  return(
  <button onClick={handleClick}>
    Click Me
  </button>)
}
export default MyComponent;