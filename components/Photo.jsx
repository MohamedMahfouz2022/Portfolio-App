"use clinet "
import Image from "next/image"

const photo = () => {
    return (
        <div className="w-full h-full relative">
            <div className="w-[250px] h-[200px] xl:w-[400px] xl:h-[350px]">
                <Image src="/Coding-bro.png"
                    className="object-contain"
                    priority
                    quality={100}
                    fill
                    alt="Coding-bro.png"
                />
            </div>
        </div>
    )
}

export default photo