import React from 'react';
import { getPokemonList } from '../data/poketmonAPI'
import PoketmonGrid from './PoketmonGrid';

// export interface PokemonPage {
//     results : { name: string; url: string }[];
//     next: string | null;
//     previous: string | null;
// }

export default async function PoketmonList() {
    const poketmonList = getPokemonList();
    const poketmonListData = await poketmonList;
    //console.log(poketmonListData)
    return (
        <div>
            <PoketmonGrid poketmonListData = {poketmonListData}/>
        </div>
    );
}

