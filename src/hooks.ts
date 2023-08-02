import {useState, useEffect, CSSProperties} from 'react'

export const useAnimatedScale = (scGap : number = 0.01, delay : number = 20) => {
    const [scale, setScale] = useState<number>(0)
    const [animated, setAnimated] = useState<boolean>(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState<number>(window.innerWidth)
    const [h, setH] = useState<number>(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
            return () => {
                window.onresize = () => {

                }
            }
        }
    }, [])
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const sf : number = Math.sin(Math.PI * scale)
    return {
        parentStyle(i : number) : CSSProperties {
            return {
                left: `${w / 2}px`,
                top: `${h / 2}px`,
                position: 'absolute',

                transform: `rotate(${135 * i * sf}deg)`
            }
        },
        blockStyle() : CSSProperties {
            return {
                position: 'absolute',
                left: `${-Math.min(w, h) / 10}px`,
                top: `${-Math.min(w, h) / 60}px`,
                background: 'indigo',
                width: `${Math.min(w, h) / 10}px`,
                height: `${Math.min(w, h) / 30}px`
            }
        }
    }
}