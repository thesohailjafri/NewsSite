
import React, { Fragment, useState } from 'react'
import { Popover, Transition, Switch } from '@headlessui/react'
import { useAppContext } from '../context'
import { Link } from 'react-router-dom'
import logo from '../static/SVG/logo.svg'
import {
    TrendingUpIcon,
    StarIcon,
    MenuIcon,
    GlobeIcon,
    LibraryIcon,
    XIcon,
} from '@heroicons/react/outline'
import { GiCricketBat, GiHockey, GiIndianPalace } from 'react-icons/gi'
import { RiBuildingLine, RiNewspaperFill } from 'react-icons/ri'
import { FiSun, FiMoon } from 'react-icons/fi'
import { IoFootball, IoBasketball } from 'react-icons/io5'
import { ChevronDownIcon } from '@heroicons/react/solid'

const logoUrl = logo
const news = [
    {
        name: 'Trending News',
        description: 'Read Trending and Breaking News.',
        href: '#/news/trending',
        icon: TrendingUpIcon,
    },
    {
        name: 'Global Covid Updates',
        description: "Updates on Covid Situation in Asia, Europe and Other Continents.",
        href: '#/news/covid',
        icon: GlobeIcon,
    },
    {
        name: 'India Covid Updates',
        description: 'Updates on Covid Situation in India.',
        href: '#/news/covid-india',
        icon: GiIndianPalace,
    },
    {
        name: 'Mumbai News',
        description: "Read Whats going in Mumbai City?",
        href: '#/news/mumbai',
        icon: RiBuildingLine
    },
    {
        name: 'Delhi News',
        description: "Read Whats going in Delhi City?",
        href: '#/news/delhi',
        icon: LibraryIcon,
    },

]


const sports = [
    {
        name: 'Football',
        description: "Read what's your favourite Football team is upto?",
        href: '#/sports/football',
        icon: IoFootball,
    },
    {
        name: 'Cricket',
        description: "Read what Virat Kohli did this time.",
        href: '#/sports/cricket',
        icon: GiCricketBat,
    },
    {
        name: 'Basketball',
        description: 'Read all the latest news about Basketball.',
        href: '#/sports/basketball',
        icon: IoBasketball,
    },
    {
        name: 'Hockey',
        description: 'Read all the latest news about all Hockey team.',
        href: '#/sports/hockey',
        icon: GiHockey
    },
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const { sportHighlights } = useAppContext()
    const [enabled, setEnabled] = useState(false)

    return (
        <Popover className="relative bg-white shadow dark:bg-gray-700 dark:text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-4">
                <div className="flex justify-between items-center  py-4 ">
                    <div className="flex justify-start">
                        <Link to='/'>
                            <span className="sr-only">Workflow</span>
                            <RiNewspaperFill size={30} className='text-indigo-600 dark:text-indigo-300' />
                        </Link>

                    </div>
                    <div className="-mr-2 -my-2  xl:hidden 2xl:hidden">
                        <Popover.Button className="bg-white dark:bg-gray-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-100 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden  xl:flex 2xl:flex items-center space-x-10">
                        <Link
                            to='/'
                            className="p-1 text-base font-medium text-gray-500  hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-50">
                            Home
                        </Link>
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900 dark:text-gray-50 ' : 'text-gray-500 dark:text-gray-100',
                                            'p-1 group  rounded-sm inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                                        )}
                                    >
                                        <span>News</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-900 dark:text-gray-50 ' : 'text-gray-500 dark:text-gray-100',
                                                'ml-2 mt-1 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-gray-100'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                            <div className="rounded-lg shadow-cl ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 overflow-hidden">
                                                <div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8">
                                                    {news.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900 dark:text-gray-50">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-100">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900 dark:text-gray-50 ' : 'text-gray-500 dark:text-gray-100',
                                            'p-1 group  rounded-sm inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none'
                                        )}
                                    >
                                        <span>Sport News</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-900 dark:text-gray-50 ' : 'text-gray-500 dark:text-gray-100',
                                                'ml-2 mt-1 h-5 w-5 group-hover:text-gray-500 dark:group-hover:text-gray-100'
                                            )}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                            <div className="rounded-lg shadow-cl ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 overflow-hidden">
                                                <div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8">
                                                    {sports.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-300" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900 dark:text-gray-50">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-100">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                {sportHighlights.length > 0 && <div className="px-5 py-5 bg-gray-50 dark:bg-gray-800 sm:px-8 sm:py-8">
                                                    <div>
                                                        <h3 className="text-sm tracking-wide font-medium text-gray-500 dark:text-gray-50 uppercase">Recent articles </h3>
                                                        <ul role="list" className="mt-4 space-y-4">
                                                            {sportHighlights.map((post) => (
                                                                <li key={post._id} className="text-base truncate">
                                                                    <a href={post.link} target="_blank" className="font-medium text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-50">
                                                                        {post.title}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-5 text-sm">
                                                        <a href="#/sports" className="font-medium text-indigo-600 dark:text-indigo-300  hover:text-indigo-500 dark:hover:text-indigo-200">
                                                            {' '}
                                                            View all articles  <span aria-hidden="true">&rarr;</span>
                                                        </a>
                                                    </div>
                                                </div>}
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <Link
                            to='/about'
                            className="p-1 text-base font-medium text-gray-500 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-50">
                            About
                        </Link>

                        <Switch
                            checked={enabled}
                            onChange={() => {
                                setEnabled(!enabled)
                                const body = document.querySelector('html')
                                if (enabled) {
                                    body.classList.add('dark')
                                } else {
                                    body.classList.remove('dark')
                                }
                            }}

                            className={`
                            ${enabled ? 'bg-indigo-600' : 'bg-indigo-300'}
                            relative inline-flex items-center h-7 rounded-full w-11`}
                        >
                            <span className="sr-only">Enable notifications</span>
                            <span
                                className={`${enabled ? 'translate-x-5' : 'translate-x-1'}
                                 text-gray-900 transition ease-in-out duration-300 inline-flex justify-center items-center w-5 h-5 transform bg-white rounded-full`}
                            >
                                {
                                    enabled ?
                                        <FiMoon />
                                        :
                                        <FiSun />
                                }

                            </span>
                        </Switch>




                    </Popover.Group>
                    {/* <div className="hidden xl:flex 2xl:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link
                            to='/signin'
                            className="p-1 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </Link>
                        <Link
                            to='/signup'
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm rounded-sm text-base font-medium text-white bg-indigo-600 hover:text-white hover:bg-indigo-700">
                            Sign up
                        </Link>
                    </div> */}
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className=" z-50 absolute top-0 inset-x-0 p-4 transition transform origin-top-right xl:hidden 2xl:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 dark:divide-gray-700 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Switch
                                        checked={enabled}
                                        onChange={() => {
                                            setEnabled(!enabled)
                                            const body = document.querySelector('html')
                                            if (enabled) {
                                                body.classList.add('dark')
                                            } else {
                                                body.classList.remove('dark')
                                            }
                                        }}

                                        className={`
                            ${enabled ? 'bg-indigo-600' : 'bg-indigo-300'}
                            relative inline-flex items-center h-7 rounded-full w-11`}
                                    >

                                        <span
                                            className={`${enabled ? 'translate-x-5' : 'translate-x-1'}
                                 text-gray-900 transition ease-in-out duration-300 inline-flex justify-center items-center w-5 h-5 transform bg-white rounded-full`}
                                        >
                                            {
                                                enabled ?
                                                    <FiMoon />
                                                    :
                                                    <FiSun />
                                            }

                                        </span>
                                    </Switch>
                                </div>


                                <div className="-mr-2">
                                    <Popover.Button className="bg-white dark:bg-gray-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-100  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {news.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-600"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600 dark:text-indigo-300 " aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900 dark:text-gray-50">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-4 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">

                                <Link
                                    to='/'
                                    className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-50">
                                    Home
                                </Link>

                                <Link
                                    to='/about'
                                    className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-50">
                                    About
                                </Link>
                            </div>


                        </div>
                        <div className="py-4 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">


                                {sports.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                        </div>
                        <div className="py-4 px-5 space-y-6">

                            <div>

                                <Link
                                    to='/signup'
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white dark:text-gray-900 bg-indigo-600 dark:bg-indigo-300 dark:hover:bg-indigo-200 hover:text-gray-50 hover:bg-indigo-500"
                                >
                                    Sign up
                                </Link>
                                <p className="mt-6 text-center text-base font-medium text-gray-500 dark:text-gray-300">
                                    Existing customer?{' '}
                                    <Link
                                        to='/signin'
                                        className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200">
                                        Sign in
                                    </Link>
                                </p>
                            </div>


                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}
