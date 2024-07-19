"use clinet "
import Image from "next/image"

const photo = () => {
    return (
        <div className="w-full h-full relative">
            <div className="w-[250px] h-[200px] xl:w-[400px] xl:h-[350px]">
                <Image src="https://www.bing.com/images/search?view=detailV2&ccid=8az%2bUgzR&id=5EE3E9582F8C10C00CEA1E7A1CA00AC8CEA0875C&thid=OIP.8az-UgzRmN0j6OXHOoHXXgHaE8&mediaurl=https%3a%2f%2fnakulphotography.com%2fstyle%2fimages%2fart%2fIceland-photo-tour-2019%2fp9.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.f1acfe520cd198dd23e8e5c73a81d75e%3frik%3dXIegzsgKoBx6Hg%26pid%3dImgRaw%26r%3d0&exph=1321&expw=1981&q=photo&simid=607997031533393539&FORM=IRPRST&ck=4EA174E4292DFB5713032C9C243FB106&selectedIndex=3&itb=0"
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
