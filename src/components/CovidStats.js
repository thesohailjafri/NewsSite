import React from 'react'
import { numberWithCommas } from '../functions'
function CovidStats({ data }) {
    return (

        <div className='p-4 bg-white rounded shadow cursor-pointer transform scale-100 transition ease-in hover:shadow-lg'>
            <h6 className="text-lg font-semibold mb-2">{data.stateName.replaceAll('_', ' ')}</h6>
            <ul>
                <li className="cs_confirmed">Confimed : {numberWithCommas(data.stateData.confirmed)}</li>
                <li className="cs_active">Active : {numberWithCommas(data.stateData.active)}</li>
                <li className="cs_recovered">Recoverd : {numberWithCommas(data.stateData.recovered)}</li>
                <li className="cs_death">Deaths : {numberWithCommas(data.stateData.deaths)}</li>
            </ul>
        </div>

    )
}

export default CovidStats
