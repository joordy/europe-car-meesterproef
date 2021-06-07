// React & Components imports
import React from 'react'
import * as Styles from './reservationCard.styles.js'
import { CheckinButtons, DealerLocations } from 'components/molecules/index'

// Component
const ReservationCard = ({ ...props }) => {
    const reservation = { ...props }
    console.log(reservation.orderDetails)

    return (
        <>
            <Styles.Card>
                <img src={reservation.carImage} alt="Car image" />
                <h3>{reservation.class}</h3>
                <article>
                    <>
                        <span>
                            <svg
                                width="14"
                                height="57"
                                viewBox="0 0 14 57"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <ellipse cx="7.16413" cy="6" rx="6.83284" ry="6" fill="#CCCCD6" />
                                <ellipse cx="7.16413" cy="51" rx="6.83284" ry="6" fill="#CCCCD6" />
                                <line x1="7.66406" y1="14" x2="7.66406" y2="43" stroke="#CCCCD6" />
                            </svg>
                        </span>

                        <DealerLocations {...props} />
                    </>
                    <Styles.StatusCheck>
                        <h4>Online Check-In</h4>
                        <p>
                            <span>1</span> van de <span>3</span> stappen voltooid
                        </p>
                        <ul>
                            <li>
                                {reservation.orderDetails ? (
                                    <p>The condition must be true!</p>
                                ) : (
                                    <p>The condition must be false!</p>
                                )}
                                Gegevens
                            </li>
                            <li>
                                {reservation.verification[0].verified ? (
                                    <p>The condition must be true!</p>
                                ) : (
                                    <p>The condition must be false!</p>
                                )}
                                Verificatie
                            </li>
                            <li>
                                {reservation.paidDeposit.paid ? (
                                    <p>The condition must be true!</p>
                                ) : (
                                    <p>The condition must be false!</p>
                                )}
                                Borg
                            </li>
                        </ul>
                    </Styles.StatusCheck>

                    <CheckinButtons {...props} />
                </article>
            </Styles.Card>
        </>
    )
}

export default ReservationCard
