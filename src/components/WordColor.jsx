import React from 'react'
import { useParams } from 'react-router-dom'

const WordColor = (props) => {

    const { word, fontColor, bColor } = useParams();
    console.log(word, fontColor, bColor);

    return (
        <div>
            {
                !isNaN(word)
                    ? <h1 style={{ color: fontColor, backgroundColor: bColor }}>The word is: {word}</h1>
                    : <h1 style={{ color: fontColor, backgroundColor: bColor }}>The word is: {word}</h1>
            }

        </div>
    )
}

export default WordColor