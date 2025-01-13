import { useState, useEffect, useRef } from 'react';

function MyComponent(){

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Component Rendered");
    console.log(inputRef);
  })

  function handleClick(){
    inputRef.current.focus();
  }

  return(
  <div>
    <button onClick={handleClick}>
      Click Me
    </button>
    <input ref={inputRef} />
  </div>);
}
export default MyComponent;