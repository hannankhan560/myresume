import React from 'react'

function AnimateText(props) {
    let anitext = props.text
    let newSpan = ''
    console.log(props.text)
    newSpan = anitext.split("").map(function(char, index){
        const style = {"animation-delay": (0.5 + index / 10) + "s"};
        return <span
            aria-hidden="true"
            key={index}
            style={style}>
            {char}
        </span>;
    })
    console.log(newSpan)
    return (
        <>
            {newSpan}
        </>
    )
}

export default AnimateText
