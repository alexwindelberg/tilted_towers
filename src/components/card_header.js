import React, {Component} from 'react'


class Card_Header extends Component {

    state = {
        bgColors : ["#9042A6", "#0582B1", "#41AF57"],
        bgColor  : ""
    }

    componentWillMount () {
        let bgc = null;

        if(this.props.gameType.includes("Solo")){
            bgc = this.state.bgColors[0];
        }
        else if(this.props.gameType.includes("Duo")){
            bgc = this.state.bgColors[1];
        }
        else if(this.props.gameType.includes("Squad")){
            bgc = this.state.bgColors[2];
        }

        this.setState({
            bgColor: bgc
        })
    }

    render() {
        return (
            <div className="card-header" style={{color: "white", backgroundColor : this.state.bgColor}}>
                <div> {this.props.gameType} </div>
            </div>
        )
    }

}

export default Card_Header;