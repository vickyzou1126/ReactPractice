class Indecision extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.removeOption = this.removeOption.bind(this)
    }

    handleDeleteOptions() {
        /*this.setState(() => {
            return {
                options: []
            }
        })*/
        this.setState(() => ({
           options: []
        }))
    }

    handlePick(e) {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option) {
        console.log(option)
        if(!option){
            return "Enter valid value"
        }else if(this.state.options.indexOf(option) > -1) {
            return "Option exists"
        }

        /*this.setState((prev) => {
            return {
                options: prev.options.concat(option)
            }
        })*/
        this.setState((prev) => ({
            options: prev.options.concat(option)
         }))
    }

    removeOption(option) {
        console.log(option)
        /*this.setState((prev) => {
            return {
                options: prev.options.filter(op => op != option)
            }
        })*/
        this.setState((prev) => ({
            options: prev.options.filter(op => op != option)
         }))
    }

    render() {
        // const title = "Indecision" 
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} removeOption={this.removeOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

Indecision.defaultProps = {
    options: ["Thing one", "Thing two"]
}

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {
                props.subtitle && <h2>{props.subtitle}</h2>
            }
        </div>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

/*class Header extends React.Component {
    render() {
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}*/

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    )
}

/*class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        )
    }
}*/


const Options = (props) => {
    return (
        <div>
             <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => 
                    <Option key={option} optionText={option} removeOption={props.removeOption} />
                ) 
            }
        </div>
    )
}

/*class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => 
                        <Option key={option} optionText={option} removeOption={this.props.removeOption} />
                    ) 
                }
            </div>
        )
    }
}*/

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => {
                props.removeOption(props.optionText)
            }} value={props.optionText}>remove</button>
        </div>
    )
}

/*class Option extends React.Component {
    constructor(props){
        super(props)
        this.removeOption = this.removeOption.bind(this)
    }

    removeOption(e) {
        e.preventDefault();
        this.props.removeOption(e.target.value)
    }

    render() {
        return (
            <div>
                {this.props.optionText}
                <button onClick={this.removeOption} value={this.props.optionText}>remove</button>
            </div>
        )
    }
}*/

class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state ={
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option)
        /*this.setState(() => {
            return {error}
        })*/
        this.setState(() => ({
            options: error
         }))
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

/*const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>  
            <p>Age: {props.age}</p>
        </div>
    )
}
// not this.props.xxx
ReactDOM.render(<User name="Vicky" age={12} />, document.getElementById("app"));*/

ReactDOM.render(<Indecision />, document.getElementById("app"));


