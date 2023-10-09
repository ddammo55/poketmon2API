import React from 'react';

type Props = {
    poketmonListData: {
        name: string;
        url: string;
    }[];
}


export default function PoketmonGrid({poketmonListData} : Props) {
    return (
        <div>
            {poketmonListData.map((poketmon) => (
                <div key={poketmon.name}>
                    <p>{poketmon.name}</p>
                    <span>{poketmon.url}</span>
                    
                </div>
            ))}
        </div>
    );
}

