"use client";
import React from 'react'
interface Users {
    id: string
}
interface Props {
    params: Users
}
export default function page(props: any) {
    console.log("giá trị props", props);
    const { params } = props;
    return (
        <div>
            <b>User Id: {params.id}</b>
        </div>
    )
}
