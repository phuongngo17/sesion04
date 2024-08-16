import React from 'react'
import Link from 'next/link'
export default function page() {
    return (
        <div>
            <Link href={"./home"}>Home </Link>
            <Link href={"./about"}>About </Link>
            <Link href={"./contact"}>Contact </Link>
            <Link href={"./login"}>Login </Link>
            <p>Login Page</p>
        </div>
    )
}
