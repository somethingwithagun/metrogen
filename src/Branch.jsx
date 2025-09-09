import StationOption from './StationOption.jsx'

const Branch = ({ stations, branchColor, branchName, setSelected }) => {

    const stationOptions = stations.slice().map( (station, index) => {
        return <StationOption station={station} branchName={branchName} onSelected={setSelected} id={index}/>
    });
    
    return (
    <ul>
        {stationOptions}
    </ul>
    )
}

export default Branch
