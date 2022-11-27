import React, {useEffect, useState} from 'react';
import './index.scss';
import {Success} from './components/Success';
import Users from './components/Users';


function App() {
    const [invites, setInvites] = useState([])
    const [users, setUsers] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [success, setSuccess] = useState(false)

    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
            setUsers(json.data)
        }).catch(err => {
            console.warn(err)
            alert("Ошибка")
        }).finally(() => setIsLoading(false))
    }, [])

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id))
        } else {
            setInvites(prev => [...prev, id])
        }
    }

    const onClickSendInvites = () => {
            setSuccess(true)

    }
    return (
        <div className="App">
            {success ? <Success setInvites={setInvites} setSuccess={setSuccess} count={invites.length}/> :
                <Users
                    onClickSendInvites={onClickSendInvites}
                    invites={invites}
                    onClickInvite={onClickInvite}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    items={users} isLoading={isLoading}/>}
        </div>
    );
}

export default App;
