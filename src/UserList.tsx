import { useTypedSelector } from "./hooks/use-typed-selector"
import { User } from './state/user'

export const UserList:React.FC = () => {
    const users: User [] = useTypedSelector((state) => state.users.data)
    console.log('users', users)

    return <div>
        {users.map(u => <p>{u.name}, {u.email}</p>)}
    </div>
}

export default UserList