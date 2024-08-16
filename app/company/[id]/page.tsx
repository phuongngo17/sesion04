"use client";
import React from 'react'
interface Company {
 id: string
}
interface Props {
    params: Company
}

export default function page(props: any) {
    const { params } = props;
    return (
        <div>
            Bài tập 4
            Company name: <b>{params.id}</b>
        </div>
    )
}

