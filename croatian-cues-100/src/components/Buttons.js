import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { categories } from '../data/categories';
import { useDispatch } from 'react-redux';
import { selectCategory } from '../redux/actions';

const Buttons = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate ();

    const handleRandomClick = () => {
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        dispatch(selectCategory(randomCategory));
        navigate(`/category/${randomCategory.id}`);
    };

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
                        <button onClick={handleRandomClick}>Random</button>
        </div>
    );
};

export default Buttons;