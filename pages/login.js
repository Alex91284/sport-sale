import { useRouter } from "next/router"
import { signIn, useSession } from "next-auth/react"
import Image from 'next/image'

export default function Login() {
    const {data:sessionStorage, status} = useSession()
    const router = useRouter()

    if (status !== 'loading' && status === 'authenticated') {
        router.push('/')
    }

    return (
        <div className="login_container">
            <p>Login</p>
            <div className="image">
                <Image
                    width={400}
                    height={400}
                    src='/logo.jpg'
                    alt="logo"
                    priority="false"
                />
            </div>
            <button onClick={() => router.push(signIn()) }>
                Signin with GitHub
            </button>
            <style jsx>
                {`
                    .login_container {
                        width: 70%;
                        margin: 10% 15%;
                        justify-content: center;
                        text-align: center
                    }
                    p {
                        width: 100%;
                        text-align: center;
                        font-size: 2.5rem;
                    }
                    button {
                        padding: 1.5%;
                        margin: 2% 
                    }
                `}
            </style>
        </div>
    )
}