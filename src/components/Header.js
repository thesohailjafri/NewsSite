/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { useAppContext } from '../context'
import { Link } from 'react-router-dom'
import {
    TrendingUpIcon,
    StarIcon,
    MenuIcon,
    GlobeIcon,
    LibraryIcon,
    XIcon,
} from '@heroicons/react/outline'
import { GiCricketBat, GiHockey, GiAmericanFootballPlayer, GiTowerBridge, GiIndianPalace } from 'react-icons/gi'
import { RiBuildingLine } from 'react-icons/ri'
import { IoFootball, IoBasketball } from 'react-icons/io5'
import { ChevronDownIcon } from '@heroicons/react/solid'

const logoUrl = 'https://img.icons8.com/cotton/64/000000/news--v2.png'

const news = [
    {
        name: 'Trending News',
        description: 'Read Trending and Breaking News.',
        href: '#/news/trending',
        icon: TrendingUpIcon,
    },
    {
        name: 'Popular News',
        description: "Read Whats stocks are rising?, Whats'going on in sport industry?",
        href: '#/news/popular',
        icon: StarIcon,
    },
    {
        name: 'Covid Updates',
        description: 'Updates on Covid Situation in India.',
        href: '#/news/covid',
        icon: GlobeIcon,
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

const country = [
    {
        name: 'India',
        code: 'in',
        description: 'Click to change location to India.',
        icon: GiIndianPalace
    },
    {
        name: 'United States',
        code: 'us',
        description: 'Click to change location to United State.',

        icon: GiAmericanFootballPlayer
    }, {
        name: 'United Kingdom',
        code: 'uk',
        description: 'Click to change location to United Kingdom.',
        icon: GiTowerBridge
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

const recentPosts = [
    { id: 1, name: 'Harshal Patel: A consistent performer who is waiting for his', href: '#' },
    { id: 2, name: 'World Archery Championship: Jyothi bags silver after compound team events', href: '#' },
    { id: 3, name: 'Tokyo Olympics vindicates FIH’s special treatment of Indian hockey', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const { changeCountry } = useAppContext()
    return (
        <Popover className="relative bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-4">
                <div className="flex justify-between items-center  py-4 ">
                    <div className="flex justify-start">
                        <Link to='/'>
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src={logoUrl}
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2  xl:hidden 2xl:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden  xl:flex 2xl:flex space-x-10">
                        <Link
                            to='/'
                            className="p-1 text-base font-medium text-gray-500 hover:text-gray-900">
                            Home
                        </Link>
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'p-1 group bg-white rounded-sm inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span>News</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
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
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {news.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
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
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'p-1 group bg-white rounded-sm inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span>Live Sport Score</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
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
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {sports.map((item) => (
                                                        <a
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                                <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                                    <div>
                                                        <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent articles </h3>
                                                        <ul role="list" className="mt-4 space-y-4">
                                                            {recentPosts.map((post) => (
                                                                <li key={post.id} className="text-base truncate">
                                                                    <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                                                        {post.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="mt-5 text-sm">
                                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                            {' '}
                                                            View all articles  <span aria-hidden="true">&rarr;</span>
                                                        </a>
                                                    </div>
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
                                            open ? 'text-gray-900' : 'text-gray-500',
                                            'p-1 group bg-white rounded-sm inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        )}
                                    >
                                        <span>Country</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open ? 'text-gray-600' : 'text-gray-400',
                                                'ml-2 h-5 w-5 group-hover:text-gray-500'
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
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {country.map((item) => (
                                                        <p
                                                            key={item.name}
                                                            onClick={() => changeCountry(item.code)}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer"
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <Link
                            to='/about'
                            className="p-1 text-base font-medium text-gray-500 hover:text-gray-900">
                            About
                        </Link>


                    </Popover.Group>
                    <div className="hidden xl:flex 2xl:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link
                            to='/signin'
                            className="p-1 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </Link>
                        <Link
                            to='/signup'
                            className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-sm shadow-sm text-base font-medium text-white bg-indigo-600 hover:text-white hover:bg-indigo-700">
                            Sign up
                        </Link>
                    </div>
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
                <Popover.Panel focus className=" z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right xl:hidden 2xl:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src={logoUrl}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-4 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">

                                <Link
                                    to='/'
                                    className="text-base font-medium text-gray-900 hover:text-gray-700">
                                    Home
                                </Link>

                                <Link
                                    to='/about'
                                    className="text-base font-medium text-gray-900 hover:text-gray-700">
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
                                        className="text-base font-medium text-gray-900 hover:text-gray-700"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                        </div>
                        <div className="py-4 px-5 space-y-6">
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">

                                {country.map((item) => (
                                    <p
                                        key={item.name}
                                        onClick={() => changeCountry(item.code)}
                                        className="text-base font-medium text-gray-900 hover:text-gray-700 cursor-pointer"
                                    >
                                        {item.name}
                                    </p>
                                ))}




                            </div>
                            <div>

                                <Link
                                    to='/signup'
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-400 hover:text-black hover:bg-blue-200"
                                >
                                    Sign up
                                </Link>
                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                    Existing customer?{' '}
                                    <Link
                                        to='/signin'
                                        className="text-indigo-600 hover:text-indigo-500">
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
