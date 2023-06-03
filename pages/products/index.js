import Navbar from "../../components/navbar"
import styles from '../../styles/Home.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Products() {
    return (
        <main className={`${styles.main} ${inter.className}`}>
            <div className={styles.description}>
                <h1>Products</h1>
                <Navbar />
            </div>
        </main>
    )
}