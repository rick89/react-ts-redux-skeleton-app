import { useState } from 'react';
import { useActions } from './hooks/use-actions';

export const UserForm: React.FC = () => {
	const { saveUser } = useActions();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		saveUser(name, email);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Name: </label>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type='text'
				/>
			</div>
			<div>
				<label>Email: </label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='email'
				/>
			</div>
			<div>
				<button>Add</button>
			</div>
		</form>
	);
};

export default UserForm;
