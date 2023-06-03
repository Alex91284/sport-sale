import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"

export default function Search() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")

    const showData = async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
    }

    const searcher = (e) => {
        setSearch(e.target.value)
    }

    let results = []
    if (!search) {
        results = products
    } else {
        results = products.filter((dato) =>
        dato.title.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }

    useEffect(() => {
        showData()        
    },[])


    return (
        <div className="contenedor">
            <div className="containerInput">
                <input
                    value={search}
                    onChange={searcher}
                    type="text"              
                    placeholder="Search"
                    className="form-control inputBuscar"
                />
                <button className="btn btn-succes">
                    <FontAwesomeIcon icon={faSearch} />
                </button>

            </div>
            
                <div className="grid">
                    {results.map((product => {
                        return (
                            <Link href={`/products/[id]`} as={`/products/${product.id}`} key={product.id}>
                                <div className="card">
                                    <h3>{product.title}</h3>
                                    <img width={300} height={350} src={product.image} alt="foto producto" />
                                    <p>$ {product.price}</p>                          
                                </div>
                            </Link>
                        )
                    }))}
                </div>
            
            <style jsx>
                {`
                    .contenedor {
                        width: 150%;
                        margin-top: 4%;
                        margin-left: -20%;
                    }
                    .inputBuscar{
                        width: 50%;
                        margin-left: 25%;
                        padding: 1.5%;
                        font-size: 1.3rem;
                        color: #fff;
                        border-radius:12px 0 0 12px
                    }
                    .btn {
                        border-radius: 0 12px 12px 0
                    }
                    .containerInput {
                        align-item: end;
                        rigth: 0;
                        display: flex;
                        padding-bottom:25px
                    }
                    .grid {
                        display: grid;
                        grid-template-columns: repeat(3, 50%);
                        flex-wrap: wrap;
                        max-width: 900px;
                        margin-top: 2rem;
                    }
                    .card {
                        margin: 1rem;
                        flex-basis: 45%;
                        padding: 1.5rem;
                        color: #fff;
                        text-decoration: none;
                        border: 2px solid #eaeaea;
                        border-radius: 10px;
                        transition: color 0.15s ease, border-color 0.15s ease;
                    }
                    .card:hover,
                    .card:focus,
                    .card:active {
                        color: #0070f3;
                        border-color: #0070f3;
                    }
                    .card h3 {
                        margin: 0 0 1rem 0;
                        font-size: 1.5rem;
                    }
                    .card p {
                        margin: 0;
                        font-size: 1.25rem;
                        line-height: 1.5;
                    }
                `}
            </style>
        </div>
    )
}