import React from 'react';
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";


const Home = () => {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [categoryId, setCategoriesId] = React.useState(0)
    const [sortType, setSortType] = React.useState({name: 'популярности', sortProperty: 'rating'})

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sortType.sortProperty.replace('-', '')
    const categories = `${categoryId > 0 ? `category=${categoryId}` : ``}`

    React.useEffect(() => {
        setIsLoading(true)
        fetch(`https://62eb00a2705264f263d20b10.mockapi.io/items?${categories}&sortBy=${sortBy}&order=${order}`)
            .then((res) => {
                return res.json()
            })
            .then((arr) => {
                setItems(arr)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categories, sortType])

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategories={(id) => setCategoriesId(id)}/>
                <Sort value={sortType} onChangeSortType={(id) => setSortType(id)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    : items.map((obj) => (<PizzaBlock key={obj.id} {...obj}/>))}
            </div>
        </div>
    );
};

export default Home;