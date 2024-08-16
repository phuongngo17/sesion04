"use client";
import React from 'react'
interface Projects {
    id: string
}
interface Props {
    params: Projects
}
export default function page(props: any) {
    console.log("giá trị props", props);
    const { params } = props;
    return (
        <div>
            <b>Trang chi tiết dự án có id: {params.id}</b>
        </div>
    )
}
