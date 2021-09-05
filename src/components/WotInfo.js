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
    Wn8Comp(props){
        return <h3>{props.children}</h3>
    }
    render(){
        return (
            <div className="card">
                
                <h2>Word of tanks</h2>
                <p>{this.state.username}</p>
                <p>WN8 <this.Wn8Comp>{this.state.wn8}</this.Wn8Comp></p>
                <p>Recent WN8 <this.Wn8Comp>{this.state.recentWn8}</this.Wn8Comp></p>
                <p>Winrate: {this.state.winrate}%</p>
             </div>
            )
    }
}
export default WotInfo