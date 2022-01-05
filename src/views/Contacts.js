import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter'
import Section from 'components/Section'
import {contactsSelectors} from 'redux/contacts'

function Contacts(contacts, fetchContacts) {

    return <div>
        <Section title="Create a new Contact">
        <ContactForm/>
        </Section>
       
        <Section title="Your contacts">
          {contacts.length === 0 ?
            <p>You don't have any contacts yet, please add one to the form on the left</p>
            :
            <>
            <Filter/>
            <ContactList /> 
            </>
          }
        </Section>
        </div>
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state)
});

export default connect(mapStateToProps)(Contacts);