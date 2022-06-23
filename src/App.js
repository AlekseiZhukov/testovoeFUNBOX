import React, {useState} from "react";
import Packaging from "./components/Packaging/Packaging";
import s from './App.module.scss'
import fon from './assets/img/Pattern.jpg'
import {products} from './data/data'

const App = () => {

    const [data, setData] = useState(products)

    const backgroundStyle = {
        backgroundImage: `url(${fon})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const handleSelectClick = (id) => {

        setData(prevState => {
            return prevState.map(item => {
                if (item.id === id) {
                    if (item.selected) {
                        return {
                            ...item,
                            selected: !item.selected
                        }
                    }
                    return {
                        ...item,
                        selected: true
                    }
                }
                return item
            })
        })
    }

    return (
        <div style={backgroundStyle} className={s.root}>
            <div className={s.backgroundShadow}/>
            <h1>Ты сегодня покормил кота?</h1>
            <div className={s.container}>
                { data.map(item => (
                    <Packaging key={item.id} setSelected={handleSelectClick} {...item} />
                ))}
            </div>
        </div>
    );
};

export default App;
