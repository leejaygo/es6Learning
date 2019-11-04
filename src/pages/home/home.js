import React, {Component} from 'react'
import { Route, Link, Switch, Redirect} from 'react-router-dom'
import { Layout, Menu } from 'antd/es'

import './home.css'
import { object1, object2, object3, object4, array1, array2,symbol,set,map,proxy,reflect,promise,classComp,moduleComp,decorator} from "../../router.config.js"

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
export default class Home extends Component {
	state = {
		collapsed: false,
		title: '对象简便写法'
	};

	onCollapse = collapsed => {
		this.setState({ collapsed });
	};

	setTitle = title => {
		this.setState({title: title})
	}

	render() {
		return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
			<div className="logo" />
			<Menu theme="dark" defaultSelectedKeys={['sub1']} mode="inline">
				<SubMenu
				key="sub1"
				title={
					<span>
						<span className="icon">{JSON.stringify({})}</span>
						<span>对象</span>
					</span>
				}
				>
					<Menu.Item key="3" onClick={()=>{this.setTitle('对象简便写法')}}>
						<Link to="/object1">对象简便写法</Link>
					</Menu.Item>
					<Menu.Item key="4" onClick={()=>{this.setTitle('对象键名表达式')}}><Link to="/object2">对象键名表达式</Link></Menu.Item>
					<Menu.Item key="5" onClick={()=>{this.setTitle('对象遍历')}}><Link to="/object3">对象解构</Link></Menu.Item>
					<Menu.Item key="6" onClick={()=>{this.setTitle('对象新增方法')}}><Link to="/object4">对象新增方法</Link></Menu.Item>				
				</SubMenu>
				<SubMenu
				key="sub2"
				title={
					<span>
						<span className="icon">[]</span>
						<span>数组</span>
					</span>
				}
				>
					<Menu.Item key="1" onClick={()=>{this.setTitle('扩展运算符')}}><Link to="/array1">扩展运算符</Link></Menu.Item>
					<Menu.Item key="2" onClick={()=>{this.setTitle('数组方法')}}><Link to="/array2">数组方法</Link></Menu.Item>
				</SubMenu>
				<Menu.Item key="7" onClick={()=>{this.setTitle('Symbol')}}>
					<span className="icon">Symbol</span>
					<Link to="/symbol"></Link>
				</Menu.Item>
				<Menu.Item key="8" onClick={()=>{this.setTitle('Set')}}>
					<span className="icon">Set</span>
					<Link to="/set"></Link>
				</Menu.Item>
				<Menu.Item key="9" onClick={()=>{this.setTitle('Map')}}>
					<span className="icon">Map</span>
					<Link to="/map"></Link>
				</Menu.Item>
				<Menu.Item key="10" onClick={()=>{this.setTitle('Proxy')}}>
					<span className="icon">Proxy</span>
					<Link to="/proxy"></Link>
				</Menu.Item>
				<Menu.Item key="11" onClick={()=>{this.setTitle('Reflect')}}>
					<span className="icon">Reflect</span>
					<Link to="/reflect"></Link>
				</Menu.Item>
				<Menu.Item key="12" onClick={()=>{this.setTitle('Promise')}}>
					<span className="icon">Promise</span>
					<Link to="/promise"></Link>
				</Menu.Item>
				<Menu.Item key="13" onClick={()=>{this.setTitle('Class')}}>
					<span className="icon">Class</span>
					<Link to="/class"></Link>
				</Menu.Item>
				<Menu.Item key="14" onClick={()=>{this.setTitle('Module')}}>
					<span className="icon">Module</span>
					<Link to="/module"></Link>
				</Menu.Item>
				<Menu.Item key="15" onClick={()=>{this.setTitle('Decorator')}}>
					<span className="icon">Decorator</span>
					<Link to="/decorator"></Link>
				</Menu.Item>
			</Menu>
			</Sider>
			<Layout>
				<Header style={{ background: '#fff', padding: 0, 'paddingLeft': '20px', color: '#333', fontWeight: '700'}}>{this.state.title}</Header>
				<Content style={{ margin: '15px', padding: '10px', background: '#fff' }}>
					<Switch>
						<Route exact path="/object1" component={object1}/>
						<Route exact path="/object2" component={object2}/>		
						<Route exact path="/object3" component={object3}/>		
						<Route exact path="/object4" component={object4}/>		
						<Route exact path="/array1" component={array1}/>		
						<Route exact path="/array2" component={array2}/>
						<Route exact path="/symbol" component={symbol}/>
						<Route exact path="/set" component={set}/>
						<Route exact path="/map" component={map}/>
						<Route exact path="/proxy" component={proxy}/>
						<Route exact path="/reflect" component={reflect}/>
						<Route exact path="/promise" component={promise}/>
						<Route exact path="/class" component={classComp}/>	
						<Route exact path="/module" component={moduleComp}/>		
						<Route exact path="/decorator" component={decorator}/>				
						<Redirect to="/object1"></Redirect>
					</Switch>
				</Content>
			</Layout>
		</Layout>
		);
  	}
}