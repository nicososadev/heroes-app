import React from 'react'
import '@testing-library/jest-dom'
import { authReducer } from '../../auth/authReducer'
import { types } from '../../types/types'

describe('Pruebas en el componente authReducer', () => {
    
    test('Debe retornar el state por defecto', () => {
        
        const state = authReducer( {} , {})

        expect( state ).toEqual( {} )
    })

    test('Debe autenticar y actualizar el state con el usuario', () => {

        const user = {
            name: 'Nicolas'
        }

        const action = {
            type: types.login,
            payload: user
        }

        const state = authReducer( {} , action)

        expect( state ).toEqual( {logged: true, name: 'Nicolas'} )
        
    })

    test('Debe borrar el usuario y actualizar el state', () => {
        
        const action = {
            type: types.logout,
        }

        const state = authReducer( {logged: true, name: 'Nicolas'} , action)

        expect( state ).toEqual( {logged: false} )
    })
    
})
