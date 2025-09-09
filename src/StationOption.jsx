import './StationOption.css'
import { useState } from 'react' 

const StationOption = ({station, branchName, onSelected, id}) => {
    return (<li className={`${branchName} ${station.selected?'selected':''}`} onClick={() => onSelected(id)}>
        <input type="checkbox" checked={station.selected} />
        <label>{station.name}</label>
    </li>)
}

export default StationOption
