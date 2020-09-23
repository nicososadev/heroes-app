import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { HeroPage } from '../../../components/heroes/HeroPage'
import { MemoryRouter, Route } from 'react-router-dom'

describe('Pruebas en el componente HeroPage', () => {
    
    const historyMock = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    
    test('Debe redirecionar si no hay argumentos en el url', () => {
        
        const wrapper = mount( 
            <MemoryRouter>
                <HeroPage history={ historyMock } />
            </MemoryRouter>
        )

        expect( wrapper.find('Redirect').exists() ).toBe( true )
    })
    
    test('Debe mostrar un heroe de acuerdo con un parametro en la url', () => {
        
        const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroId' component={ HeroPage} />
            </MemoryRouter>
        )
        
        expect( wrapper.find('.row').exists() ).toBe( true )
    })

    test('Apretar el boton regresa a la pagina anterior con push', () => {
        
        const historyMock = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }

        const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroId' component={ (props) => <HeroPage history={ historyMock } /> } />
            </MemoryRouter>
        )

        wrapper.find('button').simulate('click')

        expect( historyMock.push ).toHaveBeenCalledWith('/')
    })

    test('Apretar el boton regresa a la pagina anterior con goBack', () => {

        const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path='/hero/:heroId' component={ (props) => <HeroPage history={ historyMock } /> } />
            </MemoryRouter>
        )

        wrapper.find('button').simulate('click')

        expect( historyMock.goBack ).toHaveBeenCalled()
    })

    test('Debe llamar el redirect si el hero no existe', () => {

        const wrapper = mount( 
            <MemoryRouter initialEntries={['/hero/no-hero-found']}>
                <Route path='/hero/:heroId' component={ (props) => <HeroPage history={ historyMock } /> } />
            </MemoryRouter>
        )

        expect( wrapper.text() ).toBe('')
    })
    
    
})
