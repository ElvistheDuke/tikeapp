import React, {useState} from 'react'

const contactuspage = () => {

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  })


  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setContactData({
        ...contactData, [name] : value
    })

    console.log(contactData)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const formInfo = new FormData();

    formInfo.append("name", contactData["name"]);
    formInfo.append("email", contactData["email"]);
    formInfo.append("message", contactData["message"]);

    // formInfo.append("fullname", "John Doe");

    fetch("http://localhost:3000/", {
      method: "POST",
      body: formInfo,
    }).catch((err) => console.log(err)
    ).then((res) => (res) ? res.json() : alert('failed')
    ).then(() => {
      // function after submits 
    })

    // then((res) => res.json()).then((data) => console.log(data))

    

    // fetch("http://localhost:3000/").then((res) => res.json()).then((data) => console.log(data))
  
  }


  return (
    <div style={{width: "100%",}}>
      <div className="contactContainer">
        <div className="leftContact">
          <p style={{color: "blue", fontSize: '24px', fontWeight: "600", margin: "8px 0"}}>Send us a Message</p>
          <p style={{color: "gray", fontSize: '16px', padding: "4px 0"}}>You can contact us directly to make any inquries or to ask<br></br> any questions you might have.</p>
          <div className="contactForm">
            <form onSubmit={handleSubmit}>
              <div style={{display: "flex"}}>
                <div className="contactDetails">
                  <p>Your Name</p>
                  <input onChange={handleChange} type="text" name="name" id="name" />
                </div>
                <div className="contactDetails">
                  <p>Your Email</p>
                  <input onChange={handleChange} type="email" name="email" id="email" />
                </div>
              </div>
              <div className='contactMessage'>
                <p>Your Message</p>
                <textarea onChange={handleChange} name="message" id="message" maxLength="100" cols="30" rows="10"></textarea>
              </div>
              <button className='submitButton' type="submit">
                <p>Send Message</p>
              </button>
            </form>
          </div>
        </div>
        <div className="rightContact">
          <div className='contactDesc'>
            <p style={{fontSize: '24px', margin: '10px 0', fontWeight: '600'}}>Contact Information</p>
            <p style={{fontSize: '18px', marginTop: '10px'}}>Peanut Concept</p> 
            <p style={{fontSize: '18px', marginBottom: '10px'}}>The Official Marketing Company.</p>
            <p style={{fontSize: '14px', margin: '7px 0', color: 'gainsboro', fontWeight: '600'}}>Address</p>
            <p style={{fontSize: '18px', marginBottom: '10px'}}>2nd Floor, 4, Sumonu Str. NNPC Road, Ejigbo, Lagos.</p>
            <p style={{fontSize: '14px', margin: '7px 0', color: 'gainsboro', fontWeight: '600'}}>Phone</p>
            <p style={{fontSize: '18px', marginBottom: '10px'}}>07068853761, 08072489623, 08088041496.</p>
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default contactuspage