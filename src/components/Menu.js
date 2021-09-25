import React, { Component, useEffect } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { useLocation, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function MenuBar() {

    let location = useLocation()
    const [state, setState] = useState(null)

    useEffect(() => {
        setState(location.pathname)
    }, [location.pathname])

    return (
        <div>
            <Menu pointing>
                <Menu.Item
                    as={Link}
                    to='/'
                    name='Home'
                    active={state === '/'}
                />
                <Menu.Item
                    as={Link}
                    to='trending'
                    name='Trending'
                    active={state === '/trending'}
                />
                <Menu.Item
                    as={Link}
                    to='recommendation'
                    name='Recommendation'
                    active={state === '/recommendation'}
                />
                <Menu.Item
                    as={Link}
                    to='weather'
                    name='Weather'
                    active={state === '/weather'}
                />


                <Menu.Menu position='right'>
                    <Menu.Item position='right'>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>


        </div>
    )
}

export default MenuBar
