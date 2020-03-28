import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:this.props.value
    };
    //1.构造函数方式
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // };
    // handleIncrement(){
    //     console.log(this.state)
    // };
    //2.箭头函数方式
    // handleIncrement=()=>{
    //     this.setState({count:this.state.count+1})
    // };
    // handleIncrement=()=>{
    //     this.setState({count:this.state.count+1})
    // };
    render() { 
        console.log('props',this.props)
        return (
            <div>
                {/* <h4>#{this.props.id}</h4> */}
                <h1 className="badge badge-primary m-2">{this.props.value}</h1>
                {/* <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button> */}
                <button onClick={()=>this.props.onIncrement(this.props.id)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
            
        )
    }
}
 
export default Counter;