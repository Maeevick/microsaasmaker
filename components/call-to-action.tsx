import Link from "next/link"

type CallToActionProps = {
    content: string,
    url?: string,
    isExternal?: boolean,
}

const CallToAction = ({ content, url = "", isExternal = false }: CallToActionProps) => {
    return isExternal 
        ? <a href={url} target="_blank" className="block m-3 p-2 bg-amber-300 border border-amber-300 hover:bg-orange-600 shadow rounded-xl font-bold text-center">{content}</a>
        : <Link href={url}><a className="block m-3 p-2 bg-amber-300 border border-amber-300 hover:bg-orange-600 shadow rounded-xl font-bold text-center">{content}</a></Link> 
}

export default CallToAction