import Image from 'next/image'
import Link from 'next/link'
import CallToAction from './call-to-action'

type LinkTileProps = {
    title: string,
    content: string,
    callToAction: JSX.Element,
    isSoldOut?: boolean,
}

const LinkTile = ({ title, content, callToAction, isSoldOut = false }: LinkTileProps) => {
    return (
        <div className="flex flex-col m-3 w-96 justify-between rounded-xl border p-6 text-left shadow">
            <h2 className="text-2xl font-bold">{title}</h2 >
            {isSoldOut && <div className="flex flex-row items-center space-x-6 mt-2"><img className="" src="/soldout.png" width={80}/><span>Actuellement victime de son succès</span></div>}
            <p className="mt-4 text-xl">{content}</p>
            {callToAction}
        </div>
    )
}

export default LinkTile