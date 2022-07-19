import * as C from "./styles"
import Dice from "../../svgs/dice.svg"
import Lines from "../../svgs/lines.svg"
import { useState } from "react"

const CardItem = (props) =>{
    const [rotateDice, setRotateDice] = useState(0);
    return(
        <C.Container>
            <C.AdviceTitle>CONSELHO Nº {props.data.id}</C.AdviceTitle>
            <C.Advice>{props.data.advice}</C.Advice>
            <C.Lines src={Lines}/>
            <C.Dice 
            onClick={() =>{
                props.onclick()
                setTimeout(() => setRotateDice(false), 200)
                setRotateDice(720)
            }} 
            rotateT={rotateDice}>
                <C.DiceSvg src={Dice}/>
            </C.Dice>
        </C.Container>
    )
}
export default CardItem;