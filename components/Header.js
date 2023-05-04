import Image from "next/image"
import styles from "@/styles/Header.module.css"
import { Autour_One } from "next/font/google"

function Header() {
  return (
    <header className={`${styles.header} flex-ctr-centered `}>
        <div className="flex-ctr-centered">
            <Image src="/Big Beard Hawaiin Shirt.JPG" width={200} height={200} alt="Tomas Paul" />
        <h1>Hello there! I'm Tomas Paul</h1>
        </div>
    </header>
  )
}

export default Header