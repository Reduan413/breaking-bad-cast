import { getSuggestedQuery } from '@testing-library/react'
import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onSearch = (q) => {
        setText(q)
        getQuery(q)
    }

    return(
        <section className='search'>
            <form>
                <input type='text' className='form-control' 
                placeholder='search Characters' 
                value={text}
                onChange={(e) => onSearch(e.target.value)}
                autoFocus
                />
            </form>
        </section>
    )
}

export default Search;