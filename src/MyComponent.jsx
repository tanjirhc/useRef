import { useState, useEffect, useRef } from 'react';

function MyComponent(){

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Component Rendered");
  })

  function handleClick(){
    ref.current++;
    console.log(ref.current);
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