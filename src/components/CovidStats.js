import React from 'react'
import { numberWithCommas } from '../functions'
function CovidStats({ data }) {
    return (

        <div className='p-4 bg-white dark:bg-gray-600 dark:text-gray-50 rounded shadow cursor-pointer transform scale-100 transition ease-in hover:shadow-lg'>
            <h6 className="text-lg font-semibold mb-2">{data.country === 'All' ? "Global" : data.country} Covid Stats</h6>
            <ul>
                <li className="cs_confirmed">Confimed : {numberWithCommas(data?.cases?.total)}</li>
                <li className="cs_active">Active : {numberWithCommas(data?.cases?.active)}</li>
                <li className="cs_recovered">Recoverd : {numberWithCommas(data?.cases?.recovered)}</li>
                <li className="cs_death">Deaths : {numberWithCommas(data?.deaths?.total)}</li>
            </ul>
        </div>

    )
}

export default CovidStats
