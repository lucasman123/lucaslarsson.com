import React from 'react';
class NasInfo extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            isFetching:false,
            fetchIntervalId:-1,
            nasInfo: null
        };
    }
    
    fetchNasInfo(){
        this.setState({...this.state, isFetching: true});
        fetch("/api/nas/storage",{mode:'cors',method:'GET'})
        .then(response=>{ if(!response.ok){
            throw new Error('Network response was not ok');
        } return response.json()})
        .catch(error=>console.log(error))
        .then(data=>{
            this.setState({nasInfo:data,isFetching:false})
        });
    }
    componentDidMount(){
        this.fetchNasInfo();
        const intervalId = setInterval(
            ()=>{
                this.fetchNasInfo();
            }
        ,5000);
        this.setState({...this.state, fetchIntervalId: intervalId});
    }
    componentWillUnmount(){
        if(this.state.fetchIntervalId!=-1)
            clearInterval(this.state.fetchIntervalId);
    }

    RenderDisks = () => {
        
        let vdev = this.state.nasInfo.topology.data[0];
        let disks = vdev.children.map(disk => {
            return(
                <div>
                    <p>{disk.type} {disk.disk} <span className={this.statusToColor(disk.status)}>{disk.status}</span></p>
                </div>
            ) 
        });

        return (
        <div className = "disk-container">
            {vdev.type}
            {disks}
        </div>);
    }

    statusToColor(status){
        return status=="ONLINE" || status==true ? "online":"offline";
    }

    render(){
        if(this.state.nasInfo!=null){
            return (
                <div className="card">
                    <p>Status: <span className={this.statusToColor(this.state.nasInfo.status)}>{this.state.nasInfo.status}</span></p>
                    <p>{this.state.nasInfo.name} <span className={this.statusToColor(this.state.nasInfo.status)}>{this.state.nasInfo.status}</span>. Healthy: <span className={this.statusToColor(this.state.nasInfo.healthy)} >{this.state.nasInfo.healthy ? "True":"False"}</span></p>
                    
                    <this.RenderDisks />
                 </div>
                )
        }else{
            return '';
        }
       
    }
}
export default NasInfo;