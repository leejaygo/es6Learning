import React, { Component } from 'react'
import { getFormateCode } from '../../utils/util';

class Array2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className="mgt25">Array.from()</h1>
                <p className="defined">将对象转成数组</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('let a = {1: 1, 2: 2, 3: 3, length:3};Array.from(a)')}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：[undefined, 1, 2]'}}></code>
                </pre>

                <h1 className="mgt25">Array.of()</h1>
                <p className="defined">将一组参数转化成数组</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('Array.of(1, 2, 3)')}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：[1,2,3]'}}></code>
                </pre>

                <h1 className="mgt25">Array.copyWithin(target, start = 0, end = this.length)</h1>
                <p className="defined">将数组中的start到end位置的值复制到target为起始的位置</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('[1,2,3,4,5,6].copyWithin(2, 4)')}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：[1,2,5,6,5,6]'}}></code>
                </pre>

                <h1 className="mgt25">find()和findIndex()</h1>
                <p className="defined">find()找到数组元素中第一个满足条件的元素,findIndex()找到第一个满足条件的元素的位置</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[1,2,3,4,5,6].find(item=>item>4)'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：5'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[1,2,3,4,5,6].findIndex(item=>item>4)'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：4'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: "[{'val':1}, {'val': 2}, {'val':3}].find(item=>item.val>=2)"}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：{val: 2}'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: "[{'val':1}, {'val': 2}, {'val':3}].findIndex(item=>item.val>=2)"}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：1'}}></code>
                </pre>

                <h1 className="mgt25">fill(val, start=0, end=this.length)</h1>
                <p className="defined">fill方法用来填充数组,将现有数组中指定位置(start,end)的元素替换成fill的参数</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[1,2,3].fill(1)'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：[1,1,1]]'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[1,2,3,4,5].fill("a", 2)'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：[1,2,"a","a","a"]'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[].fill(1)'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：[]'}}></code><br/>
                </pre>

                <h1 className="mgt25">includes(val, start=0)</h1>
                <p className="defined">用来判断元素存不存在</p>
                <p>ES5写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[1,2,3].indexOf(1)>=0'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：[true'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[NaN].indexOf(NaN)>=0'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：false'}}></code>
                </pre>
                <p className="defined">indexOf用的是===判断造成[NaN].indexOf(NaN)>=0为false</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[1,2,3].includes(1)'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：true'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[NaN].indexOf(NaN)>=0'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：true'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[1,2,3].includes(1,2)'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：false, 因为从数组的第二个元素开始查找,所以查找不到'}}></code><br/>
                </pre>

                <h1 className="mgt25">flat(depth=1)</h1>
                <p className="defined">将嵌套数组展开,默认展开一层,该方法不改变原有数组</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[1, [2, [3, 4]]].flat()'}}></code><br/>
                    <code dangerouslySetInnerHTML={{__html: '//输出：[1, 2, [3, 4]]'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[1, [2, [3, 4]]].flat(Infinity)'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：[1, 2, 3, 4]'}}></code>
                </pre>

                <h1 className="mgt25">flatMap()</h1>
                <p className="defined">数组执行条件，展开</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[{"a": 1}].flatMap(i=>[i])'}}></code><br/>
                    <code dangerouslySetInnerHTML={{__html: '//输出：[2]'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[1,2,3].flatMap(i=>[[i*2]])'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：[[2],[4],[6]]'}}></code>
                </pre>

                <h1 className="mgt25">filter()</h1>
                <p className="defined">返回符合条件的元素</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[{"a": 1}, {"a": 2}, {"a": 3}].filter(i=>i.a>=2)'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：[{"a": 2}, {"a": 3}]'}}></code><br/>
                </pre>

                <h1 className="mgt25">every()和some()</h1>
                <p className="defined">every对数组中每一项执行条件判断如果每项都符合返回true。some是只要一项符合条件就返回true</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[{"a": 1}, {"a": 2}, {"a": 3}].every(i=>i.a>=2)'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：false'}}></code><br/>
                    <code dangerouslySetInnerHTML={{__html: '[{"a": 1}, {"a": 2}, {"a": 3}].some(i=>i.a>=2)'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：true'}}></code><br/>
                </pre>

                <h1 className="mgt25">map()</h1>
                <p className="defined">返回新数组，为执行条件处理后的值</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '[{"a": 1}, {"a": 2}, {"a": 3}].map(i=>i.a*2)'}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：[2,4,6]'}}></code><br/>
                </pre>

                <h1 className="mgt25">reduce()</h1>
                <p className="defined">方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('[{"a": 1}, {"a": 2}, {"a": 3}].reduce((total, item)=>{\n return total+item.a \n}, 0)')}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：6'}}></code><br/>
                </pre>
            </div>
        );
    }
}
 
export default Array2;