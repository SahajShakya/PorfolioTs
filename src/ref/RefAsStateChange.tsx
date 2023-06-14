// import React, { useState, useEffect } from 'react';

// const RefAsStateChange: React.FC = () => {
//   const [count, setCount] = useState(0);
//   const [previousCount, setPreviousCount] = useState(0);

//   useEffect(() => {
//     setPreviousCount(count);
//   }, [count]);

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Previous Count: {previousCount}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };
// export default RefAsStateChange;

// import React, { useRef, useEffect } from 'react';

// const RefAsStateChange: React.FC = () => {
//   const countRef = useRef(0);
//   const previousCountRef = useRef(0);

//   useEffect(() => {
//     previousCountRef.current = countRef.current;
//   }, [countRef.current]);

//   const increment = () => {
//     countRef.current += 1;
//   };

//   return (
//     <div>
//       <p>Count: {countRef.current}</p>
//       <p>Previous Count: {previousCountRef.current}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };
// export default RefAsStateChange;


// import React, { useRef, useEffect, useState } from 'react';

// const RefAsStateChange: React.FC = () => {
//     const [inputValue, setInputValue] = useState("");
//     const previousInputValue = useRef("");

//     useEffect(() => {
//         previousInputValue.current = inputValue;
//     }, [inputValue]);

//     return (
//         <>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//             />
//             <h2>Current Value: {inputValue}</h2>
//             <h2>Previous Value: {previousInputValue.current}</h2>
//         </>
//     );
// };
// export default RefAsStateChange;

import React, { useRef, useState } from 'react';

const RefAsStateChange: React.FC = () => {
    const [count, setCount] = useState(0);
    const previousCountRef = useRef<number>(0);

    const increment = () => {
        previousCountRef.current = count;
        // setCount(previousCountRef.current + 1);
        // Both works same but below send the updated value 
        setCount(prevCount => prevCount + 1);
        
    };

    return (
        <div>
            <p>Count: {count}</p>
            <p>Previous Count: {previousCountRef.current}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};
export default RefAsStateChange;