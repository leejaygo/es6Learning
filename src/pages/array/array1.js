import React, {Component} from 'react';

import { getFormateCode } from '../../utils/util';

class Array1 extends Component {
    state = {  }
    formateCode = (code)=>{
        return getFormateCode(code)
    }
    render() { 
        return ( 
        <div>
            <p>数组扩展运算符</p>
            <p className="defined">将数组序列化成用逗号隔开的序列</p>
            <p className="mgt25">ES6写法</p>
            <pre className="line-numbers language-js">
                <code className="language-js" dangerouslySetInnerHTML={{__html: this.formateCode("let array1 = [1,2,3];let array2 = [4,5];let array3 = [...array1, ...array2]")}}></code><br/>
                <code className="language-js" dangerouslySetInnerHTML={{__html: "//输出：[1,2,3,4,5]"}}></code><br/>
            </pre>
        </div>
        );
    }
}
 
export default Array1;