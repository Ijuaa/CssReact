import styled from "styled-components"

const ImgLogo = styled.img`
    width: 500px;
`
const Description = styled.p`
    color : Grey;
    font-size: 40px
`
const Titre = styled.h1`
    font-size: 50px;
    color : orange
`
 
function Card() {
    return (
        <div>
            <div>
                <Titre>Styled component</Titre>
                <ImgLogo src ="./assets/LogoPlante.png"/>
                <Description>C'est un logo, Un parmi tant d'autre mais celui là je le trouve beau</Description>
            </div>
        </div>
    )
}

export default Card