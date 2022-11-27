import Image from 'next/image'

type BulletPointProps = {
    img: string,
    content: string,
    isBold?: boolean,
}

const BulletPoint = ({ img, content, isBold = false }: BulletPointProps) => {
    return (
        <div className="flex m-3">
            <div className="w-[20px] min-w-[20px] flex items-center">
                <Image src={img} width={20} height={20} alt="" />
            </div>
            <p className={`text-left mx-2 ${isBold ? 'font-bold' : ''}`}>{content}</p>
        </div>
    )
}

export default BulletPoint