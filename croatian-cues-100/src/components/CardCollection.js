import React from "react";
import { useSelector } from "react-redux";
import FlashCard from "./FlashCard";

const CardCollection = () => {
    const selectedCategory = useSelector((state) => state.selectedCategory);

    if (!selectedCategory) {
        return <div>Please select a category</div>;
    }

    return (
        <div>
            <h2>{selectedCategory.name}</h2>
            {selectedCategory.words.map((word) => (
                <FlashCard key={word.id} word={word} />
            ))}
        </div>
    )
}

export default CardCollection;