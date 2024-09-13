import { useState } from 'react';
import '../css/App.css';
import ListContacts from './ListContacts';

const App = () => {
	const initialContacts = [
		{
			id: 'karen',
			name: 'Karen Isgrigg',
			handle: '@karen_isgrigg',
			avatarURL: 'http://localhost:5001/karen.jpg',
		},
		{
			id: 'richard',
			name: 'Richard Kalehoff',
			handle: '@richardkalehoff',
			avatarURL: 'http://localhost:5001/richard.jpg',
		},
		{
			id: 'tyler',
			name: 'Tyler McGinnis',
			handle: '@tylermcginnis',
			avatarURL: 'http://localhost:5001/tyler.jpg',
		},
	];

	const [contacts, setContacts] = useState(initialContacts);

	const removeContactHandler = (contact) => {
		setContacts(contacts.filter((c) => c.id !== contact.id));
	};

	return (
		<>
			<ListContacts
				contacts={contacts}
				onDeleteContact={removeContactHandler}
			/>
		</>
	);
};

export default App;
