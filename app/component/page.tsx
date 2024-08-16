"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function page() {
    const pathname = usePathname();
  return (
      <div>
          bài tập 5
          <Link className={pathname == "./component/home" ? "active" : ""} href={"./component/home"}> <a>Home</a>  </Link>
          <Link className={pathname == "./component/about" ? "active" : ""} href={"./component/about"}><a>About</a></Link>
          <Link className={pathname == "./component/contact" ? "active" : ""} href={"./component/contact"}><a>Contact</a></Link>
          <Link className={pathname == "./component/login" ? "active" : ""} href={"./component/login"}><a>Login</a></Link>
    </div>
  )
}
