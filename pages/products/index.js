import Navbar from "../../components/navbar"
import styles from '../../styles/Home.module.css'
import Search from "../../components/searchComponent"
import Title from "../../components/title"


export default function Products() {
    return (
        <main className={`${styles.main}`}>
            <div className={styles.description}>
                <Title>Products</Title>
                <Navbar />
            </div>
            <div>
                <Search />
            </div>
        </main>
    )
}