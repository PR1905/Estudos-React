import { useState } from "react";

const App = () => {
  //const [incremento, setIncremento] = useState(0);

  const clique = () => {
    setIncremento(incremento + 1);
    console.log(incremento);
  };

  return (
    <div>
      <button onClick={clique}>Incremento</button>
      <p>{incremento}</p>
    </div>
  );
};

export default App;
