import './index.css'

const ContactMe = () => {
  return (
    <div id="contact" className="container-contact">
      <p className="greetings">
        <span style={{ color: '#FF5C39', fontWeight: '400' }}>3. </span> What's
        next?
      </p>
      <h4 className="get-in-touch">Get In Touch</h4>
      <p className="paragraph-contact">
        If you have a comment, there's an opportunity in your network, or you
        just want to share with me good tips: please do not hesitate to contact
        me!
      </p>
      <a
        className="contact-me-container"
        href="mailto:romain.basly@protonmail.com"
        style={{ textDecoration: 'none' }}
      >
        <button className="contact-me">Contact me</button>
      </a>
    </div>
  )
}

export default ContactMe
