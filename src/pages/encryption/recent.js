import React, {Component} from 'react'
import SearchComp from '@/components/search'
import TableComp from '@/components/table'
import { encryptRecentTb } from '@/utils/configHeader'
import { Icon } from 'antd'
import { getEnClientList, getEncryptActionList } from '@/service/api'
class Recent extends Component {
    constructor (props){
        super(props)
    }
    state = {
        filters: [{
            type: 'selectSearch',
            key: 'engineId',
            api: getEnClientList
        },{
            type: 'datePicker',
            key: ['since', 'till']
        },{
            type: 'input',
            key: 'keyword'
        }],
        filter: {},
        pageNum: 1,
        pageSize: 10,
        total: 0,
        columns: [],
        tData: [],
        hasShowScret: false
    }

    componentWillMount (){
        this.setState({
            columns:  encryptRecentTb.bind(this)()
        })
        this.search({});
    }

    search = (filter)=>{
        this.setState({
            filter: filter
        })
        getEncryptActionList('get', Object.assign({}, filter, {pageNum: this.state.pageNum, pageSize: this.state.pageSize})).then(res=>{
            if(res.code==200){
                this.setState({
                    tData: res.data.list,
                    total: res.data.total
                })
            }
        })
    }

    showScrt = ()=>{
        this.setState({
            hasShowScret: !this.state.hasShowScret
        },()=>{
            if(this.state.hasShowScret){
                document.getElementById('eye').style.color = '#1890ff'
            }else{
                document.getElementById('eye').style.color = 'rgba(0, 0, 0, 0.85)'  
            }
        })
    }

    pageChange = (p)=>{
        this.setState({
            pageNum: p
        }) 
    }

    pageSizeChange = (pz)=>{
        this.setState({
            pageSize: pz
        })
    }

    getRecords = (row)=>{
        
    }

    download = (row)=>{

    }

    publish = (row)=>{

    }

    showDetail = (row)=>{

    }

    reEncrypt = (row)=>{
        console.log(row)
    }

    copyEncrypt = (row)=>{
        this.props.history.push(`/main/encrypt/detail/${row.id}`)
    }

    render (){
        return (
            <div>
                <SearchComp filters={this.state.filters} search={this.search} />
                <TableComp rowKey="createAt" columns={this.state.columns} tData={this.state.tData} pageNum={this.state.pageNum} pageSize={this.state.pageSize} total={this.state.total} pageChange={this.pageChange} pageSizeChange={this.pageSizeChange}/>
            </div>
        )
    }
}

export default Recent