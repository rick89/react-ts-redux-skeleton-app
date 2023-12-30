import { Provider } from 'react-redux'
import { store } from './state/store'
import './App.css';
import { UserForm } from './UserForm'
import { UserList } from './UserList'

function App() {  
  return (
    <Provider store={store}>
        <UserForm />
        <UserList />
    </Provider>
  );
}

export default App;
