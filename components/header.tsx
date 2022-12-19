import Link from 'next/link'

const HomeTitle = () => {
    return (
        <p className="text-2xl font-bold md:whitespace-nowrap w-full">
            <Link href="/">MicroSaaS Maker!</Link>
        </p>
    )
}

const NavBar = () => {
    return (
        <nav className="w-full flex space-x-3 justify-center text-[0.8rem] md:text-base">
            <Link href="/why" className="my-1 p-2 text-center hover:text-orange-600 hover:text-orange-600">Pourquoi</Link>
            <Link href={{ pathname: '/[title]', query: { title: 'quoi' } }} className="my-1 p-2 text-center hover:text-orange-600 hover:text-orange-600">Quoi</Link>
            <Link href={{ pathname: '/[title]', query: { title: 'comment' } }} className="my-1 p-2 text-center hover:text-orange-600 hover:text-orange-600">Comment</Link>
            <a className="my-1 p-2 text-center hover:text-orange-600 hover:text-orange-600" href="https://www.youtube.com/channel/UCmCyGWHYIjGBdRdDigT2Erg" target="_blank">Chaîne Youtube</a>
        </nav>
    )
}

const Header = () => {
    return (
        <header className="m-3 p-3 w-full md:w-4/5 flex flex-col lg:flex-row items-center border-b-orange-600 border-b-2 text-center">
            <HomeTitle />
            <NavBar />
        </header>
    )
}

export default Header