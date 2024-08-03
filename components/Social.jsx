import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaFacebookF, FaCodepen } from "react-icons/fa"
import { motion } from "framer-motion"

const social = [
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/mohamed-mahfouz-moawad?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", delayIcon: 1.1 },
    { icon: <FaGithub />, path: "https://github.com/MohamedMahfouz2022", delayIcon: 1.2 },
    { icon: <FaWhatsapp />, path: "https://wa.me/qr/SWV2KAXH6DCPL1", delayIcon: 1.3 },
    { icon: <FaFacebookF />, path: "https://www.facebook.com/mohamed.mahfouz.35175?mibextid=ZbWKwL", delayIcon: 1.4 },
    { icon: <FaCodepen />, path: "https://codepen.io/mohamedmahfouz2022/pens/public", delayIcon: 1.5 },
]

const Social = ({ containerStyle, iconStyle }) => {
    return (
        <div className={containerStyle}>
            {social.map((item, index) => {
                return (
                    <motion.span key={index}
                        initial={{ translateY: 50, opacity: 0 }}
                        animate={{
                            opacity: 1,
                            translateY: 0,
                            transition: { delay: item.delayIcon, duration: .8, ease: "easeInOut" }
                        }}>
                        <Link href={item.path} target="_blank" className={iconStyle} >
                            {item.icon}
                        </Link>
                    </motion.span>

                )
            })}
        </div>
    )
}

export default Social