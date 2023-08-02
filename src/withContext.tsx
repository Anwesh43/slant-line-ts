import React from "react";

import { useAnimatedScale, useDimension } from "./hooks";

const withContext = (MainComponent: React.FC<any>) : React.FC<any> => {
    return () => {
        const {scale, start : onClick} = useAnimatedScale()
        const {w, h} = useDimension()
        const props = {
            scale, 
            w, 
            h, 
            onClick
        }
        return <MainComponent {...props}/>
    }
}

export default withContext