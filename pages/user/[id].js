import React from 'react';
import { useRouter } from 'next/router';

export default function User() {

    const router = useRouter();

    return (
        <div>
            <span> This is a user id {router.query.id}</span>
        </div>
    )
}