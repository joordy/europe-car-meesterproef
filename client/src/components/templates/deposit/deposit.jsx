// React imports
import React, { useState, useEffect } from 'react'
import supabase from 'db/supabase.js'
import * as Styles from './deposit.styles.js'
import fetchData from 'utils/fetchData'

// Components
import { StepsExplainer, UserChoice, DepositForm } from 'components/organisms/index'

// React component
const Deposit = () => {
    const [currentUser, setCurrentUser] = useState([])
    const [reservationID, setReservationID] = useState([])
    let data

    useEffect(async () => {
        data = await fetchData(`${process.env.REACT_APP_BACKEND}/order-details`)
        getSpecificUser(data)
    }, [])

    const getSpecificUser = async (fetchedData) => {
        const { data, error } = await supabase
            .from('users')
            .select()
            .eq('userID', fetchedData.user.userID)

        if (!data) {
            console.log(error)
        } else {
            setCurrentUser(...data)
            setReservationID(fetchedData.reservationID)
        }
    }

    console.log('Current user', currentUser)
    console.log('reservation ID', reservationID)

    let viewportHeight = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${viewportHeight}px`)

    return (
        <Styles.Main className="page">
            <div className="stepsWrapper">
                <StepsExplainer backLink="/verification" step="2" />
                <UserChoice
                    title="Borg reservering"
                    text="De borg is voor ons een garantie dat je voorzichtig met je huurauto omgaat. De borg krijg je weer terug wanneer je geen schade hebt gemaakt aan de auto."
                    labelText="Hoe wil je de borg betalen?"
                    oneTitle="Nu, via een reservering op je creditcard of via iDEAL"
                    oneText="Dit is de snelste optie"
                    twoTitle="Ter plekke, op de Europcar locatie"
                    twoText="Via creditcard, PIN of contant."
                    threeTitle="Stap voor nu overslaan"
                    threeText="Je kunt later alsnog een keuze maken."
                    deposit="500,-"
                    movingRight="0vw"
                    movingLeft="-200vw"
                />
                <DepositForm />
            </div>
        </Styles.Main>
    )
}

export default Deposit
