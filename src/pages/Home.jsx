import React from 'react'
import { Head } from '../components/Head'
import { Buttons } from '../components/Buttons'
import { Packs } from '../components/Packs'
import { Ubication } from '../components/Ubication'
import { Footer } from '../components/Footer'

export const Home = () => {
    return (
        <>
        <Head />
        <Buttons />
        <Packs />
        <Ubication />
        <Footer />
        </>
    )
}

