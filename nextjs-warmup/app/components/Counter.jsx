'use client';

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Click count: <strong> {count}</strong></p>
            <button onClick={()=> setCount (count+1)}>+</button>
        </div>
    )
}