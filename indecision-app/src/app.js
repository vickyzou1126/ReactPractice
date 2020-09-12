class Indecision extends React.Component {
    render() {
        const title = "Indecision" 
        const subtitle = "Put your life in the hands of a computer"
        const options = ["Thing one", "Thing two"]
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
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
    handlePick() {
        alert("handle pick'")
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    removeAllOptions() {
        alert("All options have been removed")
    }

    render() {
        console.log(this.props.options)
        return (
            <div>
                <button onClick={this.removeAllOptions}>Remove All</button>
                {
                    this.props.options.map((option) => 
                        <Option key={option} optionText={option} />
                    ) 
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p key={this.props.option}>{this.props.optionText}</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option) {
            alert(option)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Indecision />, document.getElementById("app"));
