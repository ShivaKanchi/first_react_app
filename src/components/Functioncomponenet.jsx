import React, { useState } from "react";

function Functioncomponent() {
    const { count, setCount } = useState(0);

    return (
        <div>
            <p>This is Functional Component</p>
            <button onClick={() => setCount(count + 1)}>Click me to increase count</button>
            <h6>{count}</h6>
        </div>
    );
}

export default Functioncomponent;