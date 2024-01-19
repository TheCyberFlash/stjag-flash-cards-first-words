import React, { useState } from 'react';

const FlashCard = ({ word }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="flip-card-inner">
                <img className="card-image" src={"https://via.placeholder.com/300"} alt={word.english} />
                <div className="card-text">{isFlipped ? word.english : word.croatian}</div>
            </div>
        </div>
    );
}

export default FlashCard;
