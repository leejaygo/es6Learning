import React, { Component } from 'react'
import { getFormateCode } from '../utils/util';

class Symbol extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Symbol(val)</h1>
                <p className="defined">Symbol函数生成唯一性值，val参数用来描述该Symbol</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('Symbol("foo")==Symbol("foo")')}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：false'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('[{"key": Symbol()}, {"key": Symbol()}]')}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//该用法可以在vue框架中作为key值使用'}}></code><br/>
                </pre>
            </div>
        );
    }
}
 
export default Symbol;