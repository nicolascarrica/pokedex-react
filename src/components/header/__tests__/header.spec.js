import {screen, render } from '@testing-library/react'
import Header from '../Header'

test("Check that the logo image is rendered" , ()=> {
    render(<Header />)
    expect(screen.getByAltText('titlePokemon')).toBeInTheDocument()
})