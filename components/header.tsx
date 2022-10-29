import Link from 'next/link'

const Header = () => {
    return (
        <header className="m-3 p-3 w-full md:w-4/5 flex flex-col lg:flex-row items-center border-b-orange-600 border-b-2 text-center">
            <p className="text-4xl font-bold md:whitespace-nowrap w-full">
                    <Link href="/">MicroSaaS Maker!</Link>
            </p>
            <nav className="w-full flex space-x-3 justify-center text-[0.8rem] md:text-base">
                <Link href={{ pathname: '/[title]', query: { title: 'pourquoi' }}}><a className="my-1 p-2 text-center text-orange-600 border border-orange-600 rounded-xl hover:text-black hover:bg-orange-600 shadow" href="">Pourquoi</a></Link>
                <Link href={{ pathname: '/[title]', query: { title: 'quoi' }}}><a className="my-1 p-2 text-center text-orange-600 border border-orange-600 rounded-xl hover:text-black hover:bg-orange-600 shadow" href="">Quoi</a></Link>
                <Link href={{ pathname: '/[title]', query: { title: 'comment' }}}><a className="my-1 p-2 text-center text-orange-600 border border-orange-600 rounded-xl hover:text-black hover:bg-orange-600 shadow" href="">Comment</a></Link>
                <a className="my-1 p-2 text-center text-orange-600 border border-orange-600 rounded-xl hover:text-black hover:bg-orange-600 shadow" href="https://www.youtube.com/channel/UCmCyGWHYIjGBdRdDigT2Erg" target="_blank">Chaîne Youtube</a>
            </nav>
        </header>
    )
}

export default Header