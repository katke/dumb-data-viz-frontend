import React from 'react';
import ColorSelection from "./ColorSelection";
import './Goal.css';
import classNames from 'classnames';

class Goal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: "unselected"
        }
    }

    updateColor(event) {
        this.setState({
            selectedColor: event.target.value
        });
    }

    render() {
        let classes = classNames("goal", this.state.selectedColor + "-selection");
        return [<div className="grid-col-4">
            <p className={classes}>{this.props.text}</p>
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