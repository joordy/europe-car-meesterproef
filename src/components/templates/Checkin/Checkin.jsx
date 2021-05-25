// React imports
import React, { useState, useEffect } from 'react'
import * as Styles from './Checkin.styles.js'
import { IconListItem } from 'components/molecules/index'
import supabase from 'db/supabase.js'

// React component
const PageOne = () => {
    const [reservations, setReservations] = useState([])

    const readDB = async () => {
        const { data, error } = await supabase.from('users').select()
        setReservations(data)
    }

    useEffect(() => {
        readDB()
    }, [])

    return (
        <Styles.Main>
            <h1>Inchecken in 3 stappen</h1>
            <ul>
                <IconListItem
                    iconName="UserCheckIcon"
                    opacity="0.75"
                    title="Verificatie"
                    text="We controleren of je een geldig rijbewijs hebt en of je minimaal 23 jaar bent."
                />
                <IconListItem
                    iconName="CreditcardIcon"
                    title="Borg"
                    text="Geef een garantie op je creditcard of betaal contant."
                />
                <IconListItem
                    iconName="QRCodeIcon"
                    opacity="0.75"
                    title="Klaar!"
                    text="Je ontvangt een QR-code waarmee je op de Europcar locatie je sleutels kunt ophalen."
                />
            </ul>
        </Styles.Main>
    )
}

export default PageOne