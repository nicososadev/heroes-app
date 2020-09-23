import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'
import { SearchPage } from '../../../components/search/SearchPage'

describe('Pruebas en el componente SearchPage', () => {
    
    test('Debe mostrarse correctamente con valores por defecto', () => {
        
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search']} >
                <Route path='/search' component={ SearchPage } />
            </MemoryRouter>
        )

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a Hero')
    })
    
    test('Debe mostrar a Batman y el input con el valor del queryString', () => {
        
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search?q=batman']} >
                <Route path='/search' component={ SearchPage } />
            </MemoryRouter>
        )

        expect( wrapper.find('input').prop('value') ).toBe('batman')
        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe mostrar un error si no es encuentra el hero', () => {
        
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search?q=no-hero-found']} >
                <Route path='/search' component={ SearchPage } />
            </MemoryRouter>
        )

        expect( wrapper.find('.alert-danger').exists() ).toBe( true )
    })

    test('Debe llamar el push del history', () => {
        
        const history = {
            push: jest.fn()
        }

        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search?q=no-hero-found']} >
                <Route path='/search' component={ () => <SearchPage history={ history } /> } />
            </MemoryRouter>
        )

        wrapper.find('input').simulate(
            'change', 
            { target: {
                name: 'searchField',
                value: 'batman'
            }}
        )

        wrapper.find('form').simulate('submit')

        expect( history.push ).toHaveBeenCalledWith(`?q=batman`)
    })
    
})
