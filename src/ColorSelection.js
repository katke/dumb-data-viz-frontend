import React from 'react';
import './ColorSelection.css';

class ColorSelection extends React.Component {
    render() {
        return (
            <form id={this.props.selectionOwner + "-selection"}>
                <select onChange={this.props.onColorSelection}>
                    <option value="unselected"  className="unselected-select">Not Selected</option>
                    <option value="green" className="green-select">Green</option>
                    <option value="orange" className="orange-select">Orange</option>
                    <option value="red" className="red-select">Red</option>
                    <option value="blue" className="blue-select">Blue</option>
                </select>
            </form>
        )
    }
}

export default ColorSelection;