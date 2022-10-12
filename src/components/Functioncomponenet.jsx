import React, { useState } from "react";

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
const Functioncomponent = (props) => {
=======
function Functioncomponent() {
>>>>>>> parent of b6324ea (Props used)
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>This is Functional Component</p>
            <button onClick={() => setCount(count + 1)}>Click me to increase count</button>
            <button onClick={() => setCount(count - 1)}>Click me to decrease count</button>
            <h1>{count}</h1>
        </div>
    );
<<<<<<< HEAD
>>>>>>> parent of bde78c0 (States and props did)
};
=======
}
>>>>>>> parent of b6324ea (Props used)

export default Functioncomponent;