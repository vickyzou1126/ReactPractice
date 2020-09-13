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

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.CounterPlus = this.CounterPlus.bind(this)
        this.CounterMinus = this.CounterMinus.bind(this)
        this.CounterReset = this.CounterReset.bind(this)
        this.state = {
            count: 0
        }
    }

    CounterPlus() {
        this.setState((previousState) => {
            return {
                count: previousState.count + 1
            }
        })
    }

    CounterMinus() {
        this.setState((previousState) => {
            if (previousState.count == 0) {
                previousState.count = 1
            }
            return {
                count: previousState.count - 1
            }
        })
    }
    
    CounterReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.CounterPlus}>+1</button>
                <button onClick={this.CounterMinus}>-1</button>
                <button onClick={this.CounterReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));