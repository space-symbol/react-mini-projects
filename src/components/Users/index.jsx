import {Skeleton} from './Skeleton';
import User from "./User";

const Users = ({searchValue, setSearchValue, items, isLoading, invites, onClickInvite, onClickSendInvites}) => {
    return (
        <>
            <div className="search">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                </svg>
                <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                       placeholder="Найти пользователя..."/>
            </div>
            {isLoading ? (
                <div className="skeleton-list">
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </div>
            ) : (
                <ul className="users-list">
                    {
                        items.filter(user => {
                            const fullName = `${user.first_name.toLowerCase()}${user.last_name.toLowerCase()}`
                            const email = user.email.toLowerCase()
                            return fullName.includes(searchValue.toLowerCase().replace(/ /g,'')) || email.includes(searchValue.toLowerCase().replace(/ /g,''))

                        }).map(user => <User onClickInvite={onClickInvite} isInvited={invites.includes(user.id)} key={Math.random() * 100 / 12.4141} {...user}/>)
                    }
                </ul>
            )}
            {
                invites.length > 0 &&
                <button onClick={onClickSendInvites} className="send-invite-btn">Отправить приглашение</button>

            }
        </>
    );
};
export default Users