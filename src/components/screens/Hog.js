import React from 'react'

class Hog extends React.Component {
    state = {
        details: {}   
    }

    handleClick = () => {
        if (this.state.details.specialty !== undefined) return this.setState({details: {}})
        this.setState({
            details: {
                specialty: `Specialty: ${this.props.hogObj.specialty}`,
                medal: `Highest medal achieved: ${this.props.hogObj['highest medal achieved']}`,
                weight: `Weight: ${this.props.hogObj.weight}`
            }
        })
    }

    render() {
        const {name} = this.props.hogObj
        let newName = name.replace(/\W+/g, " ").toLowerCase().split(' ').join('_');
        const imgPath = require(`../../hog-imgs/${newName}.jpg`)
        return (
            <div className="ui eight wide column card">
                <div className="content">
                    <div className="header">{name}</div>
                    <a className="image">
                        <img src={imgPath} alt=""/>
                    </a>
                    <button onClick={this.handleClick}>Details</button>
                    <div className="description">
                        <div>{this.state.details.specialty}</div>
                        <div>{this.state.details.medal}</div>
                        <div>{this.state.details.weight}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hog