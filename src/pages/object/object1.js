import React, { Component } from 'react';
import {code1, code2} from './object1code'
import { getFormateCode } from '../../utils/util'
/**
 * 对象简便写法
 */
class Object1 extends Component {
    state = { 
        code1: getFormateCode(code1),
        code2: getFormateCode(code2)
    }
    render() { 
        return ( 
            <div>
                <p>对象简写语法适用在定义对象时，对象的键名和键值相同时，我们只需要写键名即可。</p>
                <p className="defined">ES5写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: this.state.code1}}></code>
                </pre>
                <p className="mgt25">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: this.state.code2}}></code>
                </pre>
            </div>
        );
    }
}
 
export default Object1;