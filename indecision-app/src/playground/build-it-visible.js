/*let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide' : 'Show'}
            </button>
            {visibility && (
                <div>
                    <p>Hey</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'))
};

render();*/

class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.changeVisibility = this.changeVisibility.bind(this)
        this.state = {
            visible: false
        }
    }

    changeVisibility() {
        this.setState((prev) => {
            return {
                visible: !prev.visible
            }
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.changeVisibility}>{this.state.visible ? "Hide Details" : "Show Details"}</button>
                {
                    this.state.visible && (
                        <div>Details</div>
                    )
                }
            </div>
        )
    }
}


ReactDOM.render(<Visibility />, document.getElementById("app"));