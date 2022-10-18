import PropTypes from 'prop-types';
import css from './Friends.module.css'; 

export const Friends = ({friends}) => {
    return (
        <ul className={css.list}>{
            friends.map(friend =>(   
            <li className={css.item} key={friend.id}>
            {friend.isOnline 
            ? (<span className={`${css.isOnline} ${css.online}`}></span>)
            : (<span className={`${css.isOnline} ${css.offline}`}></span>)}
            <img className={css.img} src={friend.avatar} alt={friend.name} width="48" />
            <p className={css.name}>{friend.name}</p>
            </li>))
}
    </ul>
    );
}

Friends.propTypes = {
    friends:PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),),
}