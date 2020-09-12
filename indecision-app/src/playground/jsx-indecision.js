const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(app.options.length)
    }
}

const numbers = [1, 2, 3];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * numbers.length);
    const option = numbers[randomNum];
    alert(option);
};

const template = (
    <div>
        <button disabled={app.options.length === 0} onClick = {onMakeDecision}>What should I do?</button>
        <ol>
            {
                numbers.map(
                    (option) => {
                        return <li key={option}>Number: {option}</li>
                    }
                ) 
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);