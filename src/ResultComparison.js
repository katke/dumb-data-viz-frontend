import React from 'react';
import GreenCheckMark from './green-check-mark.png';
import RedX from './red-x.png';

class ResultComparison extends React.Component {
    render() {
        let {
            reportColor,
            managerColor,
            isMatching,
            text 
        } = this.props;
        const imageEl = isMatching 
            ? <img src={GreenCheckMark} width="30" alt={"The level goal selections do match"} />
            : <img src={RedX} width="30" alt={"The level goal selections do not match"} />
        return (
            <div className="grid-col-6">
                <p className={reportColor + "-selection grid-col-2"}>{text}</p>
                <p className={managerColor + "-selection grid-col-2"}>{text}</p>
                {imageEl}
            </div>
            
        );
    }
}

export default ResultComparison;