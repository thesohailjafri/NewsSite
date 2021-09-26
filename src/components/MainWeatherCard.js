import React from 'react'
import { Card, Icon, Image, Label } from 'semantic-ui-react'
import { RiCloudLine, RiRainyLine, RiHazeLine, RiThunderstormsLine, RiSnowyLine, RiCloudOffLine } from 'react-icons/ri'
import { toCapitalize } from '../functions'
import { useAppContext } from '../context'

function MainWeatherCard({ data }) {


    const iconPicker = (condition) => {
        let icon
        switch (condition) {
            case 'Rain':
                icon = <RiRainyLine />
                break
            case 'Clouds':
                icon = <RiCloudLine />
                break
            case 'Haze':
                icon = <RiHazeLine />
                break
            case 'Exteme':
                icon = <RiThunderstormsLine />
                break
            case 'Thunderstorm':
                icon = <RiThunderstormsLine />
                break
            case 'Snow':
                icon = <RiSnowyLine />
                break
            default:
                icon = <RiCloudOffLine />
        }
        return icon
    }


    return (
        <Card centered size='large' color='red' >
            <Card.Content>
                <Image wrapped size='small' fluid centered  >
                    {data && iconPicker(data.weather[0].main)}
                </Image>
                <br></br>
                <Card.Header>
                    {data ? toCapitalize(data.weather[0].description) : NaN}
                    {/* {weather && <Image src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} size='mini' />} */}
                    <Image src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk0S2B5h6x2d63D0Usc9CcPYvdYbdBBV0CBbYpzMwSMM2HchWOvVMaBJn7yqn3JUzVv1k&usqp=CAU`} size='mini' />
                </Card.Header>
                <Card.Meta>
                    <span className='date'>{data ? data.weather[0].main : 'NaN'}</span>
                </Card.Meta>
                <Card.Description content='Temperature'>
                    <b>Temperature: </b>{data ? data.temp : 'NaN'}° C
                </Card.Description>
                <Card.Description content='Humidity'>
                    <b>Humidity: </b>{data ? data.humidity : 'NaN'}%
                </Card.Description>
                <Card.Description content='Dew_Point'>
                    <b>Dew Point: </b>{data ? data.dew_point : 'NaN'}° C
                </Card.Description>
                <Card.Description content='UV_Index'>
                    <b>UV Index: </b>{data ? data.uvi : 'NaN'}
                </Card.Description>
                <Card.Description content='Visibility'>
                    <b>Visibility: </b>{data ? data.visibility : 'NaN'} meters
                </Card.Description>
                <Card.Description content='Cloud_Ceiling'>
                    <b>Cloud Ceiling: </b>{data ? data.clouds : 'NaN'} %
                </Card.Description>
                <Card.Description content='Wind'>
                    <b>Wind: </b>{data ? data.wind_speed : 'NaN'} m/s
                </Card.Description>
                <Card.Description content='Pressure'>
                    <b>Pressure: </b>{data ? data.pressure : 'NaN'} hPa
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                Current Weather
                <Label attached='top right' color='red'>Current
                </Label>
            </Card.Content>
        </Card>
    )
}

export default MainWeatherCard
