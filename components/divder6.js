import React , { Component } from 'react'
import ReactDom ,{ render } from 'react-dom'

var TextDemo = React.createClass({
    getInitialState : function(){
        alert('init')
        return {
            color:'#f00',
            fontSize:'12px'
        }
    },
    componentWillMount : function(){
        alert('will')
        this.setState({
            color:'green',
            fontSize:'24px'
        })
    },
    componentDidMount : function(){
        alert('did')
        var self = this;
        setTimeout(function(){
            this.setState({
                color:'#000',
                fontSize:'50px'
            })
        }.call(this,window),2000)
    },
    render : function(){
        return (
            <div style={this.state}>
                111
            </div>
        )
    }
});
export default TextDemo