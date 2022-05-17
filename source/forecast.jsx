const React = require('react')
const ReactDOM = require('react-dom')

class Forecast extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(`data1 length: ${this.props.data.length}`)
        if (this.props.data.length != 0) {
            return <tbody>
                {console.log(`data2: ${this.props.data.list[0].main.temp}`)}

                    <tr><th colSpan="2">Weather for {this.props.data.city.name}, {this.props.data.city.country}</th></tr>

                    <tr><th>Time</th><th>Weather Description</th></tr>

                {this.props.data.list.map( (data,i)=>{
                    const msDate = data.dt
                    return(
                        <tr key={i}>
                            <td>{msDate.toLocaleDateString()}<img src="smily.gif"/></td>
                            {/* <td>{data.main.weather[0].description}</td> */}
                        </tr>
                    )
                } )}

            </tbody>
        } else {
            return <tbody><tr><td colSpan="2">Awaiting data</td></tr></tbody>
        }
    }
}

module.exports = Forecast