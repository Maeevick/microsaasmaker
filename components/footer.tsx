import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="flex mt-6 h-24 w-full items-center justify-center border-t-2 border-t-orange-600">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/Maeevick/microsaasmaker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with &#129505; by{' '}
          <Image src="/logo.png" alt="MicroSaaS Maker Logo" width={40} height={40} />
        </a>
      </footer>
    )
}

export default Footer