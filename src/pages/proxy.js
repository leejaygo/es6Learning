import React, { Component } from 'react'
import { getFormateCode } from '../utils/util';
class Proxy extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className="">Proxy</h1>
                <p className="defined">Proxy用来修改对象的默认行为，设置拦截器</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('var proxy = new Proxy(target, handler);//target 目标对象， handler拦截函数')}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('var a = new Proxy({}, {\n  get (target, property){\n    return 1;  }\n});')}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: 'a.title;//1;\na.name;//1'}}></code><br/>
                </pre>
            </div>
        );
    }
}
 
export default Proxy;