import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    
    //Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        //Update the document title using the browser API
        document.title = 'You clicked ${count} times';
    });
    
    return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Click me +</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count - 1)}>Click me -</button>
    </div>
    );
}

export default Example

