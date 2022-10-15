import React, { useState } from "react";

function Functioncomponent() {
    const Functioncomponent = (props) => {
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>This is Functional Component</p>
                <button onClick={() => setCount(count + 1)}>Click me to increase count</button>
                <button onClick={() => setCount(count - 1)}>Click me to decrease count</button>
                <h1>{count}</h1>
            </div>
        );
    }
};

export default Functioncomponent;