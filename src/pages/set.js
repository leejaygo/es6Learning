import React, { Component } from 'react'
import { getFormateCode } from '../utils/util';

class Set extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className="">Set</h1>
                <p className="defined">Set为新的数据结构,类数组其实不是数组，Set结构中的元素不能重复，支持add(),has(),clear(),delete(),forEach(),entries(),values()方法</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('var a = new Set(1,2,3,3,4,5,5);var arr = [...a]')}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：[1,2,3,4,5]'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('var a = new Set();a.add(21);a.add(21);console.log(a.size);console.log([...a])')}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：1,[21]'}}></code><br/>
                </pre>

                <h1 className="">WeakSet</h1>
                <p className="defined">WeakSet和Set类似，WeakSet成员只支持对象</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('var a = new WeakSet(1);')}}></code>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：TypeError'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('var a = new WeakSet([1,2]);')}}></code>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：TypeError'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('var a = new WeakSet([[1,2],[3,4]]);')}}></code>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：{[1,2], [3,4]}'}}></code>
                </pre>
            </div>
        );
    }
}
 
export default Set;