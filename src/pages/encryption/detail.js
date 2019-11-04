import React, { Component } from 'react';
import BreadCrumb from '@/components/breadCrumb'
import {
    Form,
    Select,
} from 'antd';
class Detail extends Component {
    state = { 
        headerConfig: [{
            title: '最近加密',
            url: '/main/encryption/recent'
        },{
            title: '新建加密',
            url: ''
        }]
    }
    render() {
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        }; 
        return ( <div>
            <BreadCrumb headerConfig={this.state.headerConfig}></BreadCrumb>
            <Form {...formItemLayout}>
                <Form.Item>
                    
                </Form.Item>
            </Form>
        </div> );
    }
}
 
export default Detail;