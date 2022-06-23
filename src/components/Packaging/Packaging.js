import React, {useState} from "react";
import PropType from 'prop-types';
import cn from 'classnames'
import s from './Packaging.module.scss'
import {ReactComponent as Background} from '../../assets/img/packaging.svg'
import cat from '../../assets/img/Cat.jpg'


const Packaging = ({
                       setSelected,
                       id,
                       selected,
                       ingredient,
                       additionally,
                       weight,
                       available,
                       description
                   }) => {

    const [hoverSelected, setHoverSelected] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()
        available && setSelected && setSelected(id)
        setHoverSelected(false)
    }

    const hoverEffectMouseLeave = () => {
        if (selected && !hoverSelected) {
            setHoverSelected(true)
        }
    }

    return (
        <div className={s.root} onMouseLeave={hoverEffectMouseLeave}>
            <div className={
                cn(s.container,
                    {
                        [s.selected]: selected && !hoverSelected,
                        [s.notAvailable]: !available,
                        [s.hoverSelected]: selected && hoverSelected
                    })
            }
                 onClick={handleClick}
            >
                <Background/>
                <span>Сказочное заморское яство</span>
                <div className={s.heading}>
                    <h2>Нямушка</h2>
                    <span>{ingredient}</span>
                </div>
                <ul>
                    {additionally && additionally.map((item, id) => <li key={id}>{item}</li>)}
                </ul>
                <div className={s.imgContainer}>
                    <img src={cat} alt="cat"/>
                </div>
                <div className={s.circle}>
                    <span>{weight}</span>
                    <span>кг</span>
                </div>
            </div>
            {!selected && available && <p>Чего сидишь? Порадуй котэ, <a onClick={handleClick} href="#">купи.</a></p>}
            {selected && available && <p>{description}</p>}
            {!available && <p className={s.notAvailableText}>Печалька, {ingredient} закончился.</p>}
        </div>
    )
}

Packaging.propTypes = {
    setSelected: PropType.func,
    id: PropType.number,
    selected: PropType.bool,
    ingredient: PropType.string,
    additionally: PropType.array,
    weight: PropType.string,
    available: PropType.bool,
    description: PropType.string
}

export default Packaging