import React from "react";
import withContext from "./withContext";
import {useStyle} from './hooks'

interface SlantLineProps {
    w : number,
    h : number, 
    scale : number, 
    onClick : () => void 
}
const SlantLine : React.FC<SlantLineProps> = (props : SlantLineProps) => {
    const {parentStyle, blockStyle} = useStyle(props.w, props.h, props.scale)
    return <>
        {[0,1].map((i : number) => (
            <div key = {`line_${i}`} style = {parentStyle(i)} onClick = {() => props.onClick()}>
                <div style = {blockStyle()}></div>
            </div>
        ))}
    </>
}

export default withContext(SlantLine)