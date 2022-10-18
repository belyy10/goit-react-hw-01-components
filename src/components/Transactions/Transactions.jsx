import PropTypes from 'prop-types';
import css from './Transactions.module.css'; 

export const Transactions = ({items}) => {
    return (
        <table className={css.table}>
  <thead>
    <tr>
      <th className={css.tableItem}>Type</th>
      <th className={css.tableItem}>Amount</th>
      <th className={css.tableItem}>Currency</th>
    </tr>
  </thead>
  <tbody>{items.map(({id,type,amount,currency}) => (   
    <tr key={id}>
      <td className={css.tableItem}>{type}</td>
      <td className={css.tableItem}>{amount}</td>
      <td className={css.tableItem}>{currency}</td>
    </tr>))}
  </tbody>
</table>
    )
}

Transactions.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
id: PropTypes.string.isRequired,
type: PropTypes.string.isRequired,
amount: PropTypes.string.isRequired,
currency: PropTypes.string.isRequired,
    }),),
}