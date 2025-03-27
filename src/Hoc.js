import React, {useState} from 'react'

const higherOrderComponent = function (Component) {
  return function EnhancedComponent() {
    const [count, setCount] = useState(0);

    return (
      <>
        <Component label="Count" count={count} />
        <button onClick={() => setCount(count + 1)}>Click</button>
      </>
    );
  };
};

function Counter({ label, count }) {
  return <p>{label}: {count}</p>;
}

const HOC = higherOrderComponent(Counter);

export default HOC