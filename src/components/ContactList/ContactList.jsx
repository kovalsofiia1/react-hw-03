import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ contacts }) {
    console.log(contacts)
    return (
        <ul className={css.list}>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <Contact data={contact} />
                </li>
            ))}
        </ul>
    );
}



