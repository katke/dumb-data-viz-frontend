import React from 'react';
import './ColorSelection.css';

class ColorSelection extends React.Component {
    render() {
        return (
                <select onChange={this.props.onColorSelection}>
                    <option value="unselected">Not Selected</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                </select>
        )
    }
}

export default ColorSelection;