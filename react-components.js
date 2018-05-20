console.log('App working.');

class IndecisionApp extends React.Component {
    render(){
        const  title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer.';
        const options = ['Thing one', 'Thing two', 'Thing four'];
        return (
            <div>
                <Header title = {title} subtitle = {subtitle} />
                <Action />
                <Options options = {options} />
                <AddOption />

            </div>
        )
    }
};

class Header extends React.Component {
    render(){
            return (
                <div>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                </div>
            );
    }
};

class Action extends React.Component {
    handlePick() {
        alert('handlePick!');
    };
    render(){
        return (
            <div>
                <button onClick = {this.handlePick}> What should I do?</button>
            </div>
        )
    }
};

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleOption = this.handleOption.bind(this);

    }
    handleOption(){
        alert('handleOption');
        console.log(this.props.options);
        
    }

    render() {
        return (
            <div>
                <button onClick={this.handleOption}>Remove All!</button> 
                {
                    this.props.options.map(
                        (option) => <Option key = {option} optionText = {option}/>
                    )
                }  
            </div>
        );
    };
};

class Option extends React.Component {
    render() {
        return (
            <div>
               Option: {this.props.optionText}
            </div>
        );
    };
};

// const onSubmitForm = (e) => {
//     e.preventDefault();
    
// };

class AddOption extends React.Component {
    onSubmitForm(e){
        e.preventDefault();
        const option = e.target.elements.option.value;
        if(option){
            alert(option);
        }
    };
    render() {
        return (
            <form onSubmit={this.onSubmitForm}>
                <input type = 'text' name = 'option' />
                <button>Submit</button>
            </form>
        );
    };
};

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />

//     </div>
// );

ReactDOM.render(<IndecisionApp / >, document.getElementById('app'));
