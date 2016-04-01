import React , { Component } from 'react'

var text = 'questions'

var TextDemo = React.createClass({
    getInitialState: function() {
        return {isStr:true};
    },
    getIsstr : function(){
        return this.state.isStr ? 'is-str2' : '';
    },
    render : function(){
        var isStr2 = this.getIsstr()

        return (
            <div className={this.state.isStr ? 'is-str' : ''}>
                <h2 className={isStr2}>条件判断变量</h2>
                <h3 className={this.getIsstr()}>条件判断函数</h3>
                <h4 className={this.state.isStr && 'is-str4'}>条件判断&&运算符</h4>
            </div>
        )
    }
})
export default TextDemo