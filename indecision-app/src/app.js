class Indecision extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            options: ["Thing one", "Thing two"]
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.removeOption = this.removeOption.bind(this)
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
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

        this.setState((prev) => {
            return {
                options: prev.options.concat(option)
            }
        })
    }

    removeOption(option) {
        console.log(option)
        this.setState((prev) => {
            return {
                options: prev.options.filter(op => op != option)
            }
        })
    }

    render() {
        const title = "Indecision" 
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} removeOption={this.removeOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        console.log(this.props.options)
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
}

class Option extends React.Component {
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
                <p key={this.props.option}>{this.props.optionText}</p>
                <button onClick={this.removeOption} value={this.props.optionText}>remove</button>
            </div>
        )
    }
}

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
        this.setState(() => {
            return {error}
        })
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

ReactDOM.render(<Indecision />, document.getElementById("app"));
