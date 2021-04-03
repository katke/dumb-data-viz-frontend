import React from 'react';

class LevelGoals extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isLoaded: false}
    }

    componentDidMount() {
        // setState({isLoaded: true});
    }

    createLevelItems() {
        // if (this.state.isLoaded) {
        //     for (const [key, value] in Object.entries(this.props.levels)) {
        //         console.log(key);
        //         // value.forEach((descriptor => console.log(descriptor)));
        //     }
        // }
    }

    render() {
        return (
            <section className="leveling">
                {this.createLevelItems()}
            </section>
            );
        }
}
  
  export default LevelGoals;
  