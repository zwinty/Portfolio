import './Contact.css';
const Contact = () => { 
  return (
    <div className="contact">
      <section className="contact__us" id="contact-us">
        <div className="contact-container">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-left"
          >
            <div className="contact-left-title">
              <h2>お問い合わせ</h2>
              <hr />
            </div>
            <input
              type="hidden"
              name="access_key"
              value="9ff1e9b9-5a61-4c19-b6ef-64c1ce40ffff"
            />
            <input
              type="text"
              name="name"
              placeholder="名前"
              className="contact-inputs"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="contact-inputs"
              required
            />
            <textarea
              name="message"
              placeholder="入力してください"
              className="contact-inputs"
              required
            ></textarea>
            <button className="button" type="submit">
              送信する <i className="bx bx-send"></i>
            </button>
          </form>
          <div className="content-right">
            <img src="/img/contactus.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;