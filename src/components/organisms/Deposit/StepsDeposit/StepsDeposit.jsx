// React imports
import React from 'react'
import * as Styles from './StepsDeposit.styles.js'
import { ButtonPrimaryLarge, ButtonSecondaryLarge } from 'components/atoms/index'
import { IconListItem } from 'components/molecules/index'

// React component
const StepsExplainer = () => {
    return (
        <Styles.Section>
            <h1>Gelukt! Je kunt verder naar stap 2</h1>
            <ul>
                <IconListItem
                    iconName="UserCheckIcon"
                    opacity="0.75"
                    title="Verificatie"
                    text="We controleren of je een geldig rijbewijs hebt en of je minimaal 23 jaar bent."
                    completed
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
            <div className="buttons">
                <ButtonPrimaryLarge text="Regel je borg" linkTo="#" />
                <ButtonSecondaryLarge text="Terug" linkTo="#" />
            </div>
        </Styles.Section>
    )
}

export default StepsExplainer