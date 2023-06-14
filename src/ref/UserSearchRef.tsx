import { useEffect, useRef, useState } from 'react';

import useOnChange from '../event/useOnchange';

const users = [
    { name: "sahaj", age: 20 },
    { name: "kai", age: 20 },
    { name: "shadowz", age: 20 },
]

const UserSearchRef: React.FC = () => {

    // const [ name, setName ] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);
    const  { name, handleChange } = useOnChange();
    const [ user, SetUser ] = useState<{ name: string, age: number } | undefined >();

    const [ isthere, SetIsThere ] = useState<boolean>(true)

    useEffect(
        () => {
            if (!inputRef.current) {
                return;
            }
            inputRef.current.focus()
        }
        ,[])

    const onClick = () => {
        const foundUser = users.find((user) => {
            return (user.name).toLowerCase() === name;
        });
        console.log(foundUser)
        foundUser == undefined? SetIsThere(false): SetIsThere(true);
        console.log(isthere)
        SetUser(foundUser);
    };

    return(
        <>
            <h3>User Search</h3>
            <input value={name} onChange={handleChange} ref={inputRef} />
            <button onClick={onClick}>Find User</button>

            <div>
                {/*  Since user object naeeds to be exist before searching of it's object attributed this cannot be done {user.name} */}
                { user ?
                    <div>
                        <p>Username: {user.name}</p>
                        <p>Age: {user.age}</p>
                    </div>
                    :
                    <p style={{ visibility: isthere ? 'hidden': 'visible' }}>User not found</p>   
                }
                
            </div>

        </>
    )
};
export default UserSearchRef;