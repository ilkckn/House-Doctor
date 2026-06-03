import "./Form.css"

const Form = () => {
  return (
    <section className="form">
        <h2>Send your message</h2>
        <form>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your full name"/>
          </div>
          <div className="e-mail">
            <label htmlFor="e-mail">E-Mail</label>
            <input type="text" id="e-mail" placeholder="your@mail.de"/>
          </div>
          <div className="regarding">
            <label htmlFor="regarding">Regarding</label>
            <input type="text" id="regarding" placeholder="What is the topic?"/>
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Your message to us..." />
          </div>
          <button type="submit">Submit</button>
        </form>
    </section>
  )
}

export default Form