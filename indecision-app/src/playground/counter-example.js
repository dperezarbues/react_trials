class Counter extends React.Component {

    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }
    
    componentDidMount(){
        try {
            const count = parseInt(localStorage.getItem('count'), 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch (e) {
            //DO NOTHING
        }
        
    }

    componentDidUpdate(prevProps,prevState){
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        console.log('add');
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    
    handleMinusOne() {
        console.log('minus');
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
        
    }
    
    handleReset() {
        
        this.setState(() => {
            return {
                count: 0
            };
        });

    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>RESET</button>
            </div>
        );
    }

}


ReactDOM.render(<Counter />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let counter = 0;

// const add = () => {
//     counter++;
//     renderCounterApp();
// };

// const minus = () => {
//     counter--;
//     renderCounterApp();
// };

// const reset = () => {
//     counter = 0;
//     renderCounterApp();
// };


// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {counter}</h1>
//             <button onClick={add}>+1</button>
//             <button onClick={minus}>-1</button>
//             <button onClick={reset}>RESET</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };


// renderCounterApp();
