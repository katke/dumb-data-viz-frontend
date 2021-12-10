import { Wrapper } from "@googlemaps/react-wrapper";
import { TestMap, OtherTestMap } from "./Map";

const Maps = (props) => {
    return (
    <>
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY} >
            <TestMap center={{lat: 51.501366, lng: -0.141890 }} zoom={15} />
        </Wrapper>
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY} >
            <OtherTestMap center={{lat: 40.762941, lng: -73.9208586 }} zoom={17} />
        </Wrapper>
    </>);
}

export default Maps;
 