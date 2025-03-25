import '../styles/Login.scss'
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export default function Login() {

    const navigate = useNavigate();
    const {user,setUser}=useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e){
        e.preventDefault();

        if (username === 'admin' && password === '123'){

            setUser(username);
            navigate("/newtask");
        } else {
            alert('Hibás felhasználónév vagy jelszó!');
        }
    }

    return (
        <div className="login">
            <h2>Belépés</h2>
                <form action="" method="post">
                    
                    <label></label>
                    <input type="text" placeholder="Adja meg a törzsszámát!" autoComplete="off" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />

                    <label></label>
                    <input type="password" placeholder="Adja meg a jelszót!" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="off" />

                    <button onClick={handleLogin}>Belépés</button>
                </form>


        </div>
    )

}