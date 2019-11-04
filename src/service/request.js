import { message} from 'antd';
import configEnv from '@/utils/configEnv'
const axios = require('axios');

const config = {
    method: 'get',
    // 基础url前缀
    baseURL: '',
    // 请求头信息
    headers: {
      'Content-Type': 'application/json'
    },
    // 设置超时时间
    timeout: 100000,
    // 携带凭证
    withCredentials: true,
    // 返回数据类型
    responseType: 'json'
}

export const createApi = (url)=>{
    return (method, params)=>{
        return new Promise((resolve, reject)=>{
            const instance = axios.create({
                baseURL: config.baseURL
            })
            instance.interceptors.request.use(
                config => {
                    // 根据请求方法，序列化传来的参数，根据后端需求是否序列化
                    if (config.method === 'post') {}
                    return config
            })
            // response 拦截器
            instance.interceptors.response.use(
                response => {
                    let data;
                    // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
                    if (response.data === undefined) {
                        data = '请求失败！'
                    } else {
                        data = response.data
                    }
                    if(data.code == 908){
                        // token过期
                        window.location.href=configEnv.ssoUrl;
                        return;
                    }
                    
                    return data
                },
                error => {
                    if(error.response) {
                        switch(error.response.status) {
                            case 400:
                            message.error(error.response.data.detail)
                            break;
                
                            case 401:
                            // const history = createHashHistory();
                            //     history.push('/login')
                            break;
                                
                            case 404:
                                message.error(error.response.data.message)
                            break; 
                
                            case 500:
                                message.error(error.response.data.detail);
                            break;
                            
                            default:
                        }
                    }
                    return Promise.reject(error) // 返回接口返回的错误信息
                }
            )
            let options = {
                method: method.toLowerCase()=='form'?'post':method.toLowerCase(),
                url: url,
                headers: config.headers
            }
            if(method.toLowerCase()==='get'){
                options.params = params;
            }
            if(method.toLowerCase()==='post'){
                options.headers={
                    'Content-Type': 'multipart/form-data'
                }
                options.data = params;
            }
            if(method.toLowerCase()=='form'){
                options.transformRequest=[function (data) {
                    // Do whatever you want to transform the data
                    let ret = ''
                    for (let it in data) {
                        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }]
                options.headers={
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            // 请求处理
            instance(options).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    }   
}