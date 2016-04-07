import React , { Component } from 'react'
import ReactDom ,{ render } from 'react-dom'

var TextDemo = React.createClass({
    getDefaultProps : function(){
        return {
            data : new Date()
        }
    },
    getInitialState : function(){
        return {
            day : this.props.data.getDay()
        }
    },
    render : function(){
        return (
            <div>
                time {this.state.day}
            </div>
        )
    }
});
export default TextDemo