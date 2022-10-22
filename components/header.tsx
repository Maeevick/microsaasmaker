const Header = () => {
    return (
        <header className="flex w-full flex-col md:flex-row items-center border-b-orange-600 border-b-2 text-center">
            <p className="text-5xl font-bold px-3 md:whitespace-nowrap"><a href="/">MicroSaaS Maker!</a></p>
            <nav className="w-full px-3 flex justify-center space-x-6 my-3">
                <a className="p-2 text-center text-orange-600 border border-orange-600 rounded-xl hover:text-black hover:bg-orange-600 shadow" href="/">A Propos</a>
                <a className="p-2 text-center text-orange-600 border border-orange-600 rounded-xl hover:text-black hover:bg-orange-600 shadow" href="https://maeevick.github.io/blog.html" target="_blank">Blog</a>
                <a className="p-2 text-center text-orange-600 border border-orange-600 rounded-xl hover:text-black hover:bg-orange-600 shadow" href="https://www.youtube.com/channel/UCmCyGWHYIjGBdRdDigT2Erg" target="_blank">Youtube</a>
                <a className="p-2 text-center text-orange-600 border border-orange-600 rounded-xl hover:text-black hover:bg-orange-600 shadow" href="/products">Produits</a>
            </nav>
        </header>
    )
}

export default Header