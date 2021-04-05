import React from 'react';

class ColorSelection extends React.Component {
    render() {
        return (
            <form id={this.props.selectionOwner + "selection"}>
                <select>
                    <option value="unselected" onClick={this.props.onColorSelection} className="unselected-select">Not Selected</option>
                    <option value="green" onClick={this.props.onColorSelection} className="green-select">Green</option>
                    <option value="orange" onClick={this.props.onColorSelection} className="orange-select">Orange</option>
                    <option value="red" onClick={this.props.onColorSelection} className="red-select">Red</option>
                    <option value="blue" onClick={this.props.onColorSelection} className="blue-select">Blue</option>
                </select>
            </form>
        )
    }
}

export default ColorSelection;