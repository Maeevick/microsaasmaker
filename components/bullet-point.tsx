import Image from 'next/image'

type BulletPointProps = {
    img: string,
    content: string,
    isBold?: boolean,
}

const BulletPoint = ({ img, content, isBold = false }: BulletPointProps) => {
    return (
        <div className="flex m-3">
            <div className="w-[40px] min-w-[40px] flex items-center">
                <Image src={img} width={40} height={40} alt="" />
            </div>
            <p className={`text-left text-lg mx-3 ${isBold ? 'font-bold' : ''}`}>{content}</p>
        </div>
    )
}

export default BulletPoint