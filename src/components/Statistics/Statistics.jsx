import css from './Statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({ title = '', stats }) => {
  return (
    <section className={css.statistics}>
      {title !== '' && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(card => (
          <li className={css.item} key={card.id}>
            <span>{card.label}</span>
            <span>{card.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage:  PropTypes.number.isRequired
  })).isRequired,
};