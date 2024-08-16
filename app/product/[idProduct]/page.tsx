"use client";
import React from 'react'
interface Product{
    idProduct:string
}
interface Props{ 
params:Product
}
// components trong next js có 2 loại
// 1:client components: chạy được ở môi trường trình duyệt tức là môi trường window
// 2:server components: chỉ chạy được trong môi trường server
// mặc định khi tạo function thì nó mặc định là server componets
export default function page(props: any) {
    console.log("giá trị props",props);
    // dùng destructoring
    const { params } = props;
  return (
    <div>
          trang chi tiết sản phẩm 
          id sản phẩm là: {params.idProduct}
    </div>
  )
}
