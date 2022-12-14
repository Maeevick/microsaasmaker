import Image from 'next/image'

const Logo = () => {
    return <Image src="/logo.png" alt="MicroSaaS Maker Logo" width={40} height={40} />
}

const GitHubLink = () => {
    return (
        <a
            className="flex items-center justify-center gap-2"
            href="https://github.com/Maeevick/microsaasmaker"
            target="_blank"
            rel="noopener noreferrer"
        >
            Made with &#129505; by <Logo />
        </a>
    )
}

const Footer = () => {
    return (
        <footer className="flex mt-6 h-24 w-full md:w-4/5 items-center justify-center border-t-2 border-t-orange-600">
            <GitHubLink />
        </footer>
    )
}

export default Footer
