import { useRouter } from "next/router"
import Navbar from "../../components/navbar"
import Title from "../../components/title"

export default function Product() {
    return (
        <div>
            <Title>Product Details</Title>
            <Navbar />
            <p></p>
        </div>
    )
}