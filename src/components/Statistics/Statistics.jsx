import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import {getRandomHexColor} from "../utils/randomColor"

export const Statistics = ({stats}) => {
    return (
    <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.list}>{stats.map(stat =>  (       
        <li className={css.item} key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
        <span className={css.label}>{stat.label}</span>
        <span className={css.percentage}>{stat.percentage}</span>
        </li>
    )
   )
}
    </ul>
  </section>);
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
}
),),
}