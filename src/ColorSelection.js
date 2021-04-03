import React from 'react';

class ColorSelection extends React.Component {
    render() {
        return (
            <form id={this.props.selectionOwner + "selection"}>
                <select>
                    <option className="green-select">Not Selected</option>
                    <option className="green-select">Green</option>
                    <option className="orange-select">Orange</option>
                    <option className="red-select">Red</option>
                    <option className="blue-select">Blue</option>
                </select>
            </form>
        )
    }
}

export default ColorSelection;