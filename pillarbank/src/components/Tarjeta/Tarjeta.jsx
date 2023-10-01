import Cards from 'react-credit-cards-2'

export default function Tarjeta({card}){
    return(
        <Cards
            number={card.number}
            expiry="****"
            cvc={card.cvc}
            name={card.nombre}
            focused={"name"}
            preview={true}
            issuer={"mastercard"}
        />
    )
}