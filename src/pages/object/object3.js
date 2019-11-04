import React, { Component } from 'react';
import { getFormateCode } from '../../utils/util'
/**
 * 对象简便写法
 */
class Object3 extends Component {
    state = { 
        
    }
    formateCode = (code) => {
        return getFormateCode(code)
    }
    render() { 
        return ( 
            <div>
                <p className="mgt25">对象解构赋值</p>
                <p className="defined">ES5写法</p>
                <pre className="line-numbers language-js">
                    <code dangerouslySetInnerHTML={{__html: this.formateCode("let obj = {foo: 1, bar: 2}")}} className="language-js"></code><br/>
                    <code dangerouslySetInnerHTML={{__html: "let obj2 = { a: 1, b: 2 }"}} className="language-js"></code><br/>
                    <code dangerouslySetInnerHTML={{__html: "for(let key in obj2){\n    obj[key] = obj2[key] \n}"}} className="language-js"></code><br/>
                </pre>
                <p className="defined mgt25">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code dangerouslySetInnerHTML={{__html: "let obj = {foo: 1, bar: 2}"}} className="language-js"></code><br/>
                    <code dangerouslySetInnerHTML={{__html: "let obj2 = { a: 1, b: 2 }"}} className="language-js"></code><br/>
                    <code dangerouslySetInnerHTML={{__html: "let obj3 = { ...obj, ...obj2 }"}} className="language-js"></code><br/>
                </pre>
            </div>
        );
    }
}
 
export default Object3;