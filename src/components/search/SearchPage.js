import React, { useMemo } from 'react'
import queryString from 'query-string'
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchPage = ({ history }) => {

    const location = useLocation()

    const { q = '' } = queryString.parse( location.search )

    const [ formValue, handleInputChange ] = useForm({ searchField: q })

    const { searchField } = formValue

    const handleSubmit = (e) => {
        e.preventDefault()

        history.push(`?q=${searchField}`)
    }

    const heroesFiltered = useMemo(() => getHeroesByName( q ), [ q ])

    return (

        <div>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Find your hero" 
                            className="form-control" 
                            name="searchField"
                            value={searchField}
                            onChange={handleInputChange}
                        />
                        <button type="submit" className="btn btn-outline-primary btn-block mt-1">Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />   

                    { 
                    ( q === '')
                    &&
                    <div className="alert alert-info">
                        Search a Hero
                    </div>
                    }

                    { 
                    ( q !== '' && heroesFiltered.length === 0)
                    &&
                    <div className="alert alert-danger">
                        No Hero found
                    </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <div className="animate__animated animate__fadeInUp">
                                <HeroCard
                                    key={hero.id}
                                    {...hero}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
