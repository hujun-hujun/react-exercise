import React , { Component } from 'react'

var text = 'questions'

var TextDemo = React.createClass({
    dateToString : function(d){
        let str = ['hello','wrold'];
        return str+[
            d.getFullYear(),
            d.getMonth()+1,
            d.getDate()
        ].join('-');
    },
    getThatId : function(){
        return 'testId'
    },
    render : function(){
        return (
            <div className={text} id={this.getThatId()}>
                <h2>{this.props.children}{this.dateToString(new Date())}</h2>
            </div>
        )
    }
})
export default TextDemo