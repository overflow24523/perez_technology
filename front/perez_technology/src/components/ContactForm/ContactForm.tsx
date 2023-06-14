import './ContactForm.css'
const ContactForm = () => {
  return (
    <div className="ContactForm container">
      <form className="form">
        <div className="descr">Contact us</div>
        <div className="input">
          <input required={true} autoComplete="off" type="text" />
          <label htmlFor="name">Name</label>
        </div>

        <div className="input">
          <input required={true} autoComplete="off" name="email" type="text" />
          <label htmlFor="email">E-mail</label>
        </div>

        <div className="input">
          <textarea required={true} cols={30} rows={1} id="message"></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button>Send message →</button>
      </form>
    </div>
  );
};

export default ContactForm;