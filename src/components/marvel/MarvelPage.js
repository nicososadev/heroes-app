import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelPage = () => {

    return (
        
        <div>
            <h1>Heroes Marvel</h1>
            <hr />
            <HeroesList publisher={ 'Marvel Comics' } />
        </div>
    )
}
