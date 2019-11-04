import React, { Component } from 'react';
import { getFormateCode } from '../../utils/util'
/**
 * 对象简便写法
 */
class Object4 extends Component {
    state = { 
        
    }
    formateCode = (code)=>{
        return getFormateCode(code)
    }
    render() { 
        return ( 
            <div>
                <h1>Object.assign()</h1>
                <p className="defined">ES5写法</p>
                <p>用ES5写法需要使用for...in循环将键值对插入到另一个对象中</p>
                <p className="mgt25">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code dangerouslySetInnerHTML={{__html: this.formateCode('let obj1 = {a: 1};')}} className="language-js"></code><br/>
                    <code dangerouslySetInnerHTML={{__html: 'let obj2 = {a: 2};'}} className="language-js"></code><br/>
                    <code dangerouslySetInnerHTML={{__html: '//写法一\nlet obj3 = Object.assign({}, obj1, obj2)'}} className="language-js"></code><br/>
                    <code dangerouslySetInnerHTML={{__html: '//写法二\nObject.assign(obj1, obj2)'}} className="language-js"></code>
                </pre>
                <p>写法一：会把obj1，obj2合并到一个新的对象中，不会对obj1，obj2的原值进行改变。</p>
                <p>写法二：是将obj2合并到obj1中改变了obj1的值。</p>
                <h1 className="mgt25">Object.entries()</h1>
                <p className="defined">将对象中的键值对转化成二维数组</p>
                <p className="defined">ES5写法</p>
                <p>用ES5写法需要使用for...in循环将键值对插入组合插入到数组中</p>
                <p className="mgt25">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code dangerouslySetInnerHTML={{__html: this.formateCode('let obj = {a: 1, b: 2};')}} className="language-js"></code><br/>
                    <code dangerouslySetInnerHTML={{__html: 'Object.entries(obj)'}} className="language-js"></code><br/>
                    <code dangerouslySetInnerHTML={{__html: '//输出：[[a, 1], [b, 2]]'}} className="language-js"></code><br/>
                </pre>
                
                <h1 className="mgt25">Object.fromEntries()</h1>
                <p className="defined">将二维数组转化为对象</p>
                <p className="defined">ES5写法</p>
                <p>用ES5写法需要使用循环</p>
                <p className="mgt25">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code dangerouslySetInnerHTML={{__html: this.formateCode('let arr = [[a, 1], [b, 2]]')}} className="language-js"></code><br/>
                    <code dangerouslySetInnerHTML={{__html: 'Object.entries(arr)'}} className="language-js"></code><br/>
                    <code dangerouslySetInnerHTML={{__html: '//输出：{a: 1, b: 2}'}} className="language-js"></code><br/>
                </pre>

                <h1 className="mgt25">Object.keys()</h1>
                <p className="defined">获取对象中的所有键值</p>
                <p className="defined">ES5写法</p>
                <p>用ES5写法需要使用for...in循环获取</p>
                <p className="mgt25">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code dangerouslySetInnerHTML={{__html: this.formateCode('const obj = { a: 1, b: 2 };let keys = Object.keys(obj)')}}></code><br/>
                    <code dangerouslySetInnerHTML={{__html: "//输出：['a','b']"}}></code>
                </pre>

                <h1 className="mgt25">Object.values()</h1>
                <p className="defined">获取对象中的所有键值</p>
                <p className="defined">ES5写法</p>
                <p>用ES5写法需要使用for...in循环获取</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code dangerouslySetInnerHTML={{__html: this.formateCode('const obj = { a: 1, b: 2 };let keys = Object.values(obj)')}}></code><br/>
                    <code dangerouslySetInnerHTML={{__html: "//输出：[1,2]"}}></code>
                </pre>

                <h1 className="mgt25">Object.getPrototypeOf()</h1>
                <p className="defined">获取对象的原型对象</p>
                <p className="defined">ES5写法</p>
                <p>用ES5写法需要使用for...in循环获取</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code dangerouslySetInnerHTML={{__html: this.formateCode('function animal() {\n ... \n};Object.getPrototypeOf(animal) === animal.prototype)')}}></code><br/>
                    <code dangerouslySetInnerHTML={{__html: "//输出：true"}}></code>
                </pre>

                <h1 className="mgt25">Object.setPrototypeOf()</h1>
                <p className="defined">设置对象的原型</p>
                <p className="defined">ES5写法</p>
                <pre className="line-numbers language-js">
                    <code dangerouslySetInnerHTML={{__html: this.formateCode('function setPrototypeOf(obj,proto) {\n  obj.__proto__ = proto;  return obj;}')}}></code><br/>
                </pre>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code dangerouslySetInnerHTML={{__html: this.formateCode('Object.setPrototypeOf(obj, proto)')}}></code><br/>
                </pre>
            </div>
        );
    }
}
 
export default Object4;