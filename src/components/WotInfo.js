import React from 'react';
import axios from 'axios';
class WotInfo extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            fetched:false,
            username:"",
            wn8:0,
            recentWn8:0,
            winrate:0.0
        };
    }

    componentDidMount()
    {
        this.getData();    
    }

    getData()
    {
        this.setState({...this.state, fetched:true,username:"zLucasman",wn8:1100,winrate:50.5});
    }
    wn8Comp(props){
        return <h1>props.wn8</h1>
    }
    render(){
        return (
            <div className="card">
                <h2>Word of tanks</h2>
                <p>{this.state.username}</p>
                <p>WN8: {this.state.wn8}</p>
                <p>Recent WN8: {this.state.recentWn8}%</p>
                <p>Winrate: {this.state.winrate}%</p>
             </div>
            )
    }
}
export default WotInfo