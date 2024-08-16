"use client";
import { usePathname, useParams } from 'next/navigation';
import React from 'react';

export default function page() {
    const pathname = usePathname();
    const params = useParams(); 
    const id = params.id; 
    return (
        <div>
            Danh sách nhiệm vụ của dự án có id: <b>{id}</b>
        </div>
    );
}