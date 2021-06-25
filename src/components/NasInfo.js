import React from 'react';
class NasInfo extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            isFetching:false,
            nasInfo: null
        };
    }
    
    fetchNasInfo(){
        console.log("Fetching info");
        this.setState({...this.state, isFetching: true});
        fetch("api/nas/storage/",{mode:'no-cors',method:'GET'})
        .then(response=>response.json())
        .then(data=>{
            this.setState({nasInfo:data,isFetching:false})
        });
    }
    componentDidMount(){
        this.fetchNasInfo();
    }
    RenderDisks = () => {
        let vdev = this.state.nasInfo.topology.data[0];
        console.log(vdev);
        let disks = vdev.children.map(disk => {
            return(
                <div>
                    <p>{disk.type} {disk.disk} <span className={this.statusToColor(disk.status)}>{disk.status}</span></p>
                </div>
            ) 
        });
        console.log(disks);
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
            console.log(this.state.nasInfo);
            return (
                <div className="nas-container">
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