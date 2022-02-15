import React,{useState} from 'react';
import axios from 'axios';
class SunInfo extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.state = {
            fetched:false,
            lat:"59.270699",
            lng:"17.779591",
            date:"2022-02-16",
            sunriseSummer:"",
            sunriseWinter:"",
            sunsetSummer:"",
            sunsetWinter:""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({...this.state,[name]: value});
      }
    getData()
    {
        axios(`/api/v1/sun?lat=${this.state.lat}&lng=${this.state.lng}&date=${this.state.date}`)
        .then(response=>{ 
        return response.data;
        })
        .catch(error=>console.log(error))
        .then(data=>{
            this.setState({...this.state,...data});
            console.log(JSON.stringify(this.state))
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.getData();
      }
    

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <div className="card">
              <span>LAT</span><input type="text" name="lat" value={this.state.lat} onChange={this.handleChange}/>
              <br/>
              <span>LNG</span><input name="lng" value={this.state.lng} onChange={this.handleChange}/>
              <br/>
              <span>Date</span><input name="date" value={this.state.date} onChange={this.handleChange}/>
              <p>Sunrise Summer time {this.state.sunriseSummer}</p>
              <p>Sunrise Winter time {this.state.sunriseWinter}</p>
              <p>Sunset Summer time {this.state.sunsetSummer}</p>
              <p>Sunrise Winter time {this.state.sunsetWinter}</p>
            <button type="submit">Check</button>
            </div>
            </form>
            )
    }
}
export default SunInfo;