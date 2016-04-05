import React , { Component } from 'react'
import ReactDom ,{ render } from 'react-dom'

var TextDemo = React.createClass({
    render : function(){
        return <input name="text" />
    },
    componentDidMount : function(){
        var input = ReactDom.findDOMNode(this);
        $(input).dialog({
            title : 'text',
            content : 'text'
        })
    }
})
export default TextDemo