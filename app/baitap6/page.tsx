"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function page() {
    const pathname = usePathname();
    return (
        <div>
            <p>bài tập 6</p>

            <Link className={pathname == "./baitap6/home" ? "select" : ""} href={"./baitap6/home"}> Home  </Link>
            <Link className={pathname == "./baitap6/about" ? "select" : ""} href={"./baitap6/about"}>About</Link>
            <Link className={pathname == "./baitap6/contact" ? "select" : ""} href={"./baitap6/contact"}>Contact</Link>
            <Link className={pathname == "./baitap6/login" ? "select" : ""} href={"./baitap6/login"}>Login</Link>
        </div>
    )
}
