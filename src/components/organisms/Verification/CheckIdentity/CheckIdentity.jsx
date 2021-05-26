// React imports
import React from 'react'
import * as Styles from './CheckIdentity.styles.js'
import { ButtonPrimaryLarge, ButtonSecondaryLarge, CloseIcon } from 'components/atoms/index'

// React component
const CheckIdentity = () => {
    return (
        <Styles.Section>
            <article>
                <h1>Maak een foto van je rijbewijs</h1>
                <p>
                    We beschermen je gegevens en gebruiken de foto uitsluitend om te verifiëren of
                    je in het bezit bent van een geldig rijbewijs. Na de huurperiode verwijderen we
                    dit onmiddelijk.
                </p>
                <CloseIcon width="1.5rem" height="1.5em" />
            </article>

            <Styles.IdentityChecker></Styles.IdentityChecker>

            <Styles.BtnWrapper>
                <ButtonSecondaryLarge text="Terug" linkTo="#" />
                <ButtonPrimaryLarge text="Volgende" linkTo="#" />
            </Styles.BtnWrapper>
        </Styles.Section>
    )
}

export default CheckIdentity