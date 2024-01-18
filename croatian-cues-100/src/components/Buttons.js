import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../redux/actions';

const Buttons = () => {
    const dispatch = useDispatch();

    return (
        <div>
            {categories.map((category) => (
                <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    onClick={() => dispatch(selectCategory(category))}
                >
                    <button>{category.name}</button>
                </Link>
            ))}
        </div>
    );
};

export default Buttons;