"use client";
import React from 'react'
interface Product {
    id: string
}
interface Props {
    params: Product
}
export default function page(props: any) {
    console.log("giá trị props", props);
    const { params } = props;
    return (
        <div>
            Bài tập 3
           Product id: {params.id}
        </div>
    )
}

