import React, { Component } from 'react'
import { getFormateCode } from '../utils/util';

class Map extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1 className="">Map</h1>
                <p className="defined">Map为新的数据结构,类对象，Map对象的键值接受任何类型，而普通的对象只支持字符串类型作为键值。Map类型支持的方法有set(), get(), has(), delete()方法</p>
                <p className="">ES6写法</p>
                <pre className="line-numbers language-js">
                    <code className="language-js" dangerouslySetInnerHTML={{__html: getFormateCode('var a = new Map();var key = {"b": 1};a.set(key, 1);a.get(key)')}}></code><br/>
                    <code className="language-js" dangerouslySetInnerHTML={{__html: '//输出：1'}}></code><br/>
                </pre>
            </div>
        );
    }
}
 
export default Map;