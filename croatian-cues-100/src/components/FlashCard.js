import React, { useState } from 'react';

const FlashCard = ({ word }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    // need to add the flip class to this card
    return (
        <div onClick={handleClick}>
            <div>{word.english}</div>
            <div>{word.croatian}</div>
        </div>
    );
}

export default FlashCard;