import Link from 'next/link'

export default function Navbar() {
    return (
        
        <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/products'>Products</Link>
                </li>
            </ul>
            <style jsx>
                {`
                    ul {
                        list-style-type: none;
                        display: flex
                    }
                    li {
                        padding: 10%;
                        border-radius: 5%
                    }
                    li:hover {
                        background-color: #7E7E7D;
                    }
                `}
            </style>
        </nav>
    )
}