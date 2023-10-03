const ListContacts = ({ contacts }) => {
	console.log('hey');

	return (
		<ol className="contactList">
			{contacts.map((contact) => (
				<li key={contact.id}>{contact.name}</li>
			))}
		</ol>
	);
};

export default ListContacts;
