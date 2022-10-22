type LinkTileProps = {
    url: string,
    title: string,
    content: string,
    isExternal?: boolean,
}

const LinkTile = ({ url, title, content, isExternal = false }: LinkTileProps) => {
    return (
        <a href={url} target={isExternal ? "_blank" : ""} className="m-3 w-96 grow rounded-xl border p-6 text-left hover:text-orange-600 focus:text-orange-600 shadow">
            <h2 className="text-2xl font-bold">{title} &rarr;</h2>
            <p className="mt-4 text-xl">{content}</p>
        </a>
    )
}

export default LinkTile