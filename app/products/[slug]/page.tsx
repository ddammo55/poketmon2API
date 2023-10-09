import React from 'react';

type Props = {
    params: {
        slug: string;
    };
};
export default function Page({params} : Props) {
    return (
        <div>
            <h1>{params.slug}</h1>
        </div>
    );
}

