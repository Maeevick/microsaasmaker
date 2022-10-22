import Link from 'next/link'

const Header = () => {
    return (
        <header className="m-3 p-3 w-full flex flex-col md:flex-row items-center border-b-orange-600 border-b-2 text-center">
            <p className="text-5xl font-bold md:whitespace-nowrap"><Link href="/">MicroSaaS Maker!</Link></p>
            <nav className="w-full flex flex-col justify-center md:flex-row md:space-x-6">
                <Link href="/wip"><a className="my-1 p-2 text-center text-orange-600 border border-orange-600 rounded-xl hover:text-black hover:bg-orange-600 shadow" href="">A Propos</a></Link>
                <Link href="/products"><a className="my-1 p-2 text-center text-orange-600 border border-orange-600 rounded-xl hover:text-black hover:bg-orange-600 shadow" href="">Produits</a></Link>
                <a className="my-1 p-2 text-center text-orange-600 border border-orange-600 rounded-xl hover:text-black hover:bg-orange-600 shadow" href="https://maeevick.github.io/blog.html" target="_blank">Blog</a>
                <a className="my-1 p-2 text-center text-orange-600 border border-orange-600 rounded-xl hover:text-black hover:bg-orange-600 shadow" href="https://www.youtube.com/channel/UCmCyGWHYIjGBdRdDigT2Erg" target="_blank">Youtube</a>
            </nav>
        </header>
    )
}

export default Header