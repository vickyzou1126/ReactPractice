let count = 0;
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => {
            count++; // wont work
        }}>+1</button>
        <button onClick={() => {
            
        }}>-1</button>
        <button onClick={() => {
            
        }}>reset</button>
    </div>
);