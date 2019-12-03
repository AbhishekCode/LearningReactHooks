import React, {useState} from "react";

const One = (props) => {
  // So usestate returns an array where first element is state itself 
  //and second elemnet is function to update that state.
  const [count, setCount] = useState(0); // initialized using array destructuring 
  
  // Old nice way. -:)
  const count2Array =  useState(1);
  const count2 = count2Array[0];
  const setCount2 = count2Array[1];

  return (
    <div>
     <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>You clicked {count2} times</p>
        <button onClick={() => setCount2(count2 + 1)}>
        Click me2
      </button>
    </div>
  )
}

export default One