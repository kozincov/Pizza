import React from 'react';

const Categories = ({value, onChangeCategories}) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (

        <div className="categories">
            <ul>
                {categories.map((categoryName, index) => <li key={index}
                                                      onClick={() => onChangeCategories(index)}
                                                      className={value === index ? 'active' : ''}>{categoryName}</li>
                )}
            </ul>
        </div>
    );
};

export default Categories;