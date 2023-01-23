import React from 'react'

function ContactForm() {
  return (
    <section className='sec contactFormSec contactForm'>
        <div className='container'>
            <h2 className='section-heading' data-aos="fade-down">Contact</h2>
            <div className='intro-subsec'>
                <div className='intro-title'>
                    <p data-aos="zoom-in"><span>Email: </span>hannankhan.work@gmail.com</p>
                </div>
                <div className='intro-title'>
                    <p data-aos="zoom-in"><span>Contact: </span>(415) 900 0292</p>
                </div>
            </div>
            <form action="https://submit-form.com/wz2Q5GuW">
                <input type="text" id="name" name="name" placeholder="Name" required="" />
                <input type="email" id="email" name="email" placeholder="Email" required="" />
                <input type="phone" id="phone" name="phone" placeholder="Phone" required="" />

                <input type="text" id="subject" name="subject" placeholder="Subject" required="" />
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required=""
                    ></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </section>
  )
}

export default ContactForm