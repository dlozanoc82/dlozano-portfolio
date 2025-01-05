import { useEmail } from "../../hooks";
import "./contact.css"

export const Contact = () => {

    const { form, sendEmail } = useEmail();

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">

            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
                <div className="contact__info">

                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <form action="mailto:dlozanoc862@gmail.com" method="post" encType="text/plain">
                            <button type="submit" className="contact__button">
                                Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </button>
                        </form>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>
                        <h3 className="contact__card-title">WhatsApp</h3>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=573153253069&text=Hello, more information!" className="contact__button">
                            Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>
                        <h3 className="contact__card-title">Messenger</h3>
                        <a target="_blank" href="https://m.me/danielalexander.lozanocardoso" className="contact__button">
                            Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">

                    <div className="contact__form-div">
                        <label htmlFor="" className="contact__form-tag">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            className="contact__form-input"
                            placeholder="Insert your name"
                            required
                        />
                    </div>

                    <div className="contact__form-div">
                        <label htmlFor="" className="contact__form-tag">Mail</label>
                        <input
                            type="email"
                            name="user_email"
                            className="contact__form-input"
                            placeholder="Insert your email"
                            required
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label htmlFor="" className="contact__form-tag">Project</label>
                        <textarea
                            cols="30"
                            rows="10"
                            name="message"
                            className="contact__form-input"
                            placeholder="Write your project"
                            required
                        ></textarea>
                    </div>

                    <button value="Send" type="submit" className="button button--flex btn-contact">
                        Send Message <i className="uil uil-message btn-contact-icon rotate"></i>
                    </button>

                </form>

            </div>

        </div>
    </section>
  )
}
