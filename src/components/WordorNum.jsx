import React from 'react'
import { useParams } from 'react-router-dom'

const WordorNum = (props) => {

    const { wordOrNumId } = useParams();
    console.log(wordOrNumId);

    return (
        <div>
            {
                // ternanry statement 
                isNaN(wordOrNumId)
                ? <h1>The word is: {wordOrNumId}</h1>
                : <h1>The number is: {wordOrNumId}</h1>

            }
        </div>
    )
}

export default WordorNum
