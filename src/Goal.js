import React from 'react';
import ColorSelection from "./ColorSelection";
import './Goal.css';

class Goal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorValue: "unselected"
        }
    }

    updateColor(event) {
        this.setState({
            colorValue: event.target.value
        });
    }

    render() {
        return [<div className="grid-col-4">
            <p className={"goal " + this.state.colorValue + "-selection"}>{this.props.text}</p>
        </div>,
        <div className="grid-col-2">
            <ColorSelection 
            onColorSelection={this.updateColor.bind(this)}
            selectionOwner={this.props.selectionOwner}/>
        </div>
        ];
    }
}

export default Goal;