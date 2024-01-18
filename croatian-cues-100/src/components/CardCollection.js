import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FlashCard from "./FlashCard";

const CardCollection = () => {
    const selectedCategory = useSelector((state) => state.selectedCategory);

    if (!selectedCategory) {
        return <div>Please select a category</div>;
    }

    return (
        <div>
            <Link to="/">Back to Home</Link>
            <h2>{selectedCategory.name}</h2>
            {selectedCategory.words.map((word) => (
                <FlashCard key={word.id} word={word} />
            ))}
        </div>
    )
}

export default CardCollection;