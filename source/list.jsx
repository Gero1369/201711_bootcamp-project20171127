const React = require('react')
const ReactDOM = require('react-dom')

const Forecast = require('./forecast.jsx')

let tableStyles = {
    margin: '2em',
    width: '60%'
}

const appId = '&appid=7f96c0e919737a0f5cc4ed37b6ee4975'

const apiWeather = 'http://api.openweathermap.org/data/2.5/weather?'
const apiForecast = 'http://api.openweathermap.org/data/2.5/forecast?'
const defaultWeather = apiWeather + 'zip=53007' + appId
const defaultForecast = apiForecast + 'zip=53007' + appId

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {data: [],url:''}
        this.handleFetch = this.handleFetch.bind(this)
        this.handleUrlChange = this.handleUrlChange.bind(this)
    }

    handleUrlChange(event){
        this.setState({url: event.target.value})
    }

    handleFetch(){

        fetch(defaultForecast)
            .then((response) => response.json() )
            .then(json => this.setState({data: json}) )
            .catch(error => console.error(error))

    }

    render() {
        return <div>
            <input type="text" onChange={this.handleUrlChange} value={this.state.url}/>
            <button className="btn btn-info" onClick={this.handleFetch}>Fetch Data</button>
         <table style={tableStyles} className="table">
            <thead>
        <tr>
            <th>Date</th>
            <th>Weather</th>
            {/* <th>Last Name</th>
            <th>email</th>
            <th>gender</th>
            <th>IP address</th> */}
        </tr>
    </thead>
    <Forecast data={this.state.data}/>

        </table>
        </div>
    }
}


module.exports = List