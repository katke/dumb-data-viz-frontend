import React from 'react';
import './ColorSelection.css';

class ColorSelection extends React.Component {
    render() {
        return (
            <form className="color-selection-dropbox" id={this.props.selectionOwner + "-selection"}>
                <select onChange={this.props.onColorSelection}>
                    <option value="unselected">Not Selected</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                </select>
            </form>
        )
    }
}

export default ColorSelection;