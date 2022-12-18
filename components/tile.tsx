import Image from 'next/image'

type TileProps = {
    children: JSX.Element | JSX.Element[]
}

const Tile: React.FC<TileProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-center border border-amber-600 shadow rounded-xl p-2 m-3">
            {children}
        </div>
    )
}

export default Tile