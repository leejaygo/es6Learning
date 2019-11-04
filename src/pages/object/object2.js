import React, { Component } from 'react';
import {code3, code4} from './object1code'

import { getFormateCode } from '../../utils/util'
/**
 * 对象简便写法
 */
class Object2 extends Component {
    state = { 
        code1: getFormateCode(code3),
        code2: getFormateCode(code4)
    }
    render() { 
        return ( 
            <div>
                <p>对象键名表达式，支持在定义对象时，键名可以通过在中括号中通过表达式直接拼接字符串</p>
                <p className="defined">ES5写法</p>
                <pre className="line-numbers language-js">
                    <code dangerouslySetInnerHTML={{__html: this.state.code1}}></code>
                </pre>
                <p className="mgt25">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code dangerouslySetInnerHTML={{__html: this.state.code2}}></code>
                </pre>
            </div>
        );
    }
}
 
export default Object2;