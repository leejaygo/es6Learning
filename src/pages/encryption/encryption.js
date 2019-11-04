import React, {Component} from 'react'
import {recentEncrypt, historyEncrypt} from '../../router.config'
import { HashRouter as Router, Switch, Redirect } from 'react-router-dom'
import NavComp from '../../components/nav'
 export default class Encryption extends Component {
    render (){
        const navs = [
            {url: "/main/encryption/recent", name: '最近加密'},
            {url: "/main/encryption/history", name: '历史加密'},
        ]
        return (
            <div>
                <ul>
                    <NavComp links={navs}></NavComp>
                </ul>
                <div style={{padding: '15px'}}>
                    <Switch>
                        <Route path="/main/encryption/recent" component={recentEncrypt}></Route>
                        <Route path="/main/encryption/history" component={historyEncrypt}></Route>
                        <Redirect to="/main/encryption/recent"></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}