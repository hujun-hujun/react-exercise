import React , { Component } from 'react'


var TextDemo = React.createClass({
    
    render : function(){
        var style = {
                color:'#f00',
                fontSize:'20px'
            }
        return (
            <div>
                <h3>{/*作为子节点注释*/}子节点注释</h3>
                <input /*内联属性注释*/ name="email" planceholder="内联属性注释" />
                <label htmlFor="for-text">for关键词</label>
                <div className="testClass" style={style}>class关键词</div>
            </div>
        )
    }
})
export default TextDemo