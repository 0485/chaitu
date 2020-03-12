import React from 'react';
class Incdec extends React.Component{
    constructor(){
        super();
        this.state={
            count:100,counter:0
        }
    }
    countIncrement=()=>{
        this.setState({counter:this.state.counter+1});
    }
    countDecrement=()=>{
        this.setState({count:this.state.count-1});
    }
    render(){
        return(
        <div>
            <h2>{this.state.counter}</h2>
            <button onClick={this.countIncrement}>Click Me</button>
            <h2>{this.state.count}</h2>
            <button onClick={this.countDecrement}>Click Me</button>
            </div>
            )
            
        
    }
}
export default Incdec;