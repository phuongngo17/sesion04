"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function page() {
    const pathName = usePathname();
    console.log("giá trị pathName",pathName);
    
  return (
    <div>
        <Link className={pathName=="/products/menmen"?"active":"" } href={"/products/menmen"}>Men men</Link>
          
        <Link className={pathName == "/products/iphone" ? "active" : ""} href={"/products/iphone"}>Iphone</Link>
        
    </div>
  )
}
