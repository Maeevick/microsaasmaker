import Head from 'next/head'
import React from "react"
import Footer from "./footer"
import Header from "./header"

type Props = {
    children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <Head>
                <title>MicroSaaS Maker</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="flex flex-1 flex-col items-center w-full md:w-4/5 px-6 text-center">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout