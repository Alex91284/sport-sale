import { useRouter } from "next/router"
import styles from '../../styles/Home.module.css'
import Navbar from "../../components/navbar"
import Title from "../../components/title"

export default function Product({ product }) {
const router = useRouter()

    return (
        <div clasName = {`${styles.main}`}>
            <div className={`${styles.description}`}>
                <Navbar />
                <Title>Product Details</Title>
            </div>
            <div className="card">
                <h1>{product.title}</h1>
                <img width={500} height={600} src={product.image} alt="foto producto" />
                <p>{product.description}</p>
                <p> $ {product.price}</p>

            </div>
            <style jsx>
                {`
                    div {
                        min-heigth: 100vh;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center
                    }
                    .card {
                        width: 50%;
                        border: solid
                    }
                    p {
                        width: 100%;
                        font-size: 1.5rem
                    }
                `}
            </style>
        </div>
    )
}
export async function getServerSideProps({params}) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await res.json()

    return {
        props: {
            product
        }
    }
}