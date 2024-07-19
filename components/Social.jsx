import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaFacebookF, FaCodepen } from "react-icons/fa"

const social = [
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/mohamed-mahfouz-moawad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <FaGithub />, path: "https://github.com/MohamedMahfouz2022" },
    { icon: <FaWhatsapp />, path: "https://wa.me/qr/SWV2KAXH6DCPL1" },
    { icon: <FaFacebookF />, path: "https://www.facebook.com/mohamed.mahfouz.35175?mibextid=ZbWKwL" },
    { icon: <FaCodepen />, path: "https://codepen.io/mohamedmahfouz2022/pens/public" },
]

const Social = ({ containerStyle, iconStyle }) => {
    return (
        <div className={containerStyle}>
            {social.map((item, index) => {
                return (
                    <Link key={index} href={item.path} target="_blank" className={iconStyle} >
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Social