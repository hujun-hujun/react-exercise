import React , { Component } from 'react'


var TextDemo = React.createClass({
    handleClick : function(){
        this.refs.myInput.value='设置value值'
    },
    render : function(){
        return (
            <div>
                <input ref="myInput" />
                <input type="button" value="点击获取真实dom节点" onClick={this.handleClick} />
            </div>
        )
    }
})
export default TextDemo