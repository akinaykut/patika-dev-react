import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>
        <h1>{counter} </h1>
      </div>

      <div>
        {" "}
        <button onClick={() => setCounter(counter + 1)}>Increase</button>{" "}
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>{" "}
      </div>
    </div>
  );
}

export default Counter;
