import React from 'react';

const Categories = () => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const [activeIndex, setActiveIndex] = React.useState(0)

    const onClickCategory = (index) => {
        setActiveIndex(index)
    }

    return (

        <div className="categories">
            <ul>
                {categories.map((value, index) => <li key={index}
                                                      onClick={() => onClickCategory(index)}
                                                      className={activeIndex === index ? 'active' : ''}>{value}</li>
                )}
            </ul>
        </div>
    );
};

export default Categories;