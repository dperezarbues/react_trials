class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return (
            <div>
                <h1>Visibility toggle</h1>
                <button onClick = {this.handleToggleVisibility}>
                    {this.state.visibility ?  'Hide Details' : 'Show details'}
                </button>
                {this.state.visibility && <p>Details shown, hide me if you dare</p>}
            </div>
        );
    }


}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let detailsShown = false;

// const showDetails = () => {
//     detailsShown = !detailsShown;
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick = {showDetails}>{detailsShown ?  'Hide Details' : 'Show details'}</button>
//             {detailsShown && <p>Details shown, hide me if you dare</p>}
//         </div>
//     );
//     ReactDOM.render(template,appRoot);
// };

// render();