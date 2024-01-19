import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import Ourchef from '../../components/Ourchef'
import Fetchsection from '../../components/Fetchsection'
import Oursatisfied from '../../components/Oursatisfied'
import Recentblog from '../../components/Recentblog'

function Home() {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header/>
            <Ourchef/>
            <Fetchsection/>
            <Oursatisfied/>
            <Recentblog/>
        </div>
    )
}

export default Home