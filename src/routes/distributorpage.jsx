import React, { useState } from 'react'
import FormRow from '../components/FormRow'

export const Context = React.createContext();

const distributorpage = () => {

  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    officephone: "",
    email: "",
    nokfullname: "",
    nokaddress: "",
    nokcity: "",
    nokstate: "",
    nokphone: "",
    quantity: "",
    storage: "",
  })


  const formFields = [
    [
      {
        label: "Full Name",
        id: "fullname",
        placeholder: "John Doe",
        type: "text",
      },
    ],
    [
      {
        label: "Address",
        id: "address",
        placeholder: "E.g. 123 Abc Street",
        type: "text"
      },
    ],
    [
      {
        label: "City",
        id: "city",
        placeholder: "E.g. Ikeja",
        type: "text"
      },
      {
        label: "State",
        id: "state",
        placeholder: "E.g. Lagos",
        type: "text"
      },
    ],
    [
      {
        label: "Phone Number",
        id: "phone",
        placeholder: "E.g. +234 8012345678",
        type: "number",
      },
    ],
    [
      {
        label: "Office Phone Number",
        id: "officephone",
        placeholder: "E.g. +234 8012345678",
        type: "number",
      },
    ],
    [
      {
        label: "Email Address",
        id: "email",
        placeholder: "E.g. example@gmail.com",
        type: "email"
      },
    ],
    [
      {
        label: "Next of Kin Full Name",
        id: "nokfullname",
        placeholder: "E.g. John Doe",
        type: "text"
      },
    ],
    [
      {
        label: "Next of Kin Address",
        id: "nokaddress",
        placeholder: "E.g. 123 Abc Street",
        type: "text"
      },
    ],
    [
      {
        label: "Next of Kin City",
        id: "nokcity",
        placeholder: "E.g. Ikeja",
        type: "text"
      },
      {
        label: "Next of Kin State",
        id: "nokstate",
        placeholder: "E.g. Lagos",
        type: "text"
      },
    ],
    [
      {
        label: "Next of Kin Phone Number",
        id: "nokphone",
        placeholder: "E.g. +234 8012345678",
        type: "number",
      },
    ],
    [
      {
        label: "Next of Kin Email Address",
        id: "nokemail",
        placeholder: "E.g. example@gmail.com",
        type: "email"
      },
    ],
    [
      {
        label: "Quantity of Product",
        id: "quantity",
        placeholder: "E.g. 10",
        type: "number"
      },
    ],
    [
      {
        label: "Do you have a Storage Facility",
        id: "storage",
        placeholder: "E.g. Yes or No",
        type: "Text"
      },
    ],
  ]


  const handleSubmit = (e) => {
    e.preventDefault()
    const formInfo = new FormData();

    formFields.map((field) => {
      field.map((data) => {
        // data.id
        // formData[data.id]

        formInfo.append(data.id, formData[data.id]);

      })
    })

    // formInfo.append("fullname", "John Doe");

    fetch("http://localhost:3000/", {
      method: "POST",
      body: formInfo,
    }).then((res) => res.json()).then((data) => console.log(data))

    // fetch("http://localhost:3000/").then((res) => res.json()).then((data) => console.log(data))
  
  }


  return (
    <Context.Provider value={[formData, setFormData]}>
    <div className='distributorContainer'>
      <div style={{display: "flex", alignItems: 'center', justifyContent: 'center', margin: "20px 0", textAlign: 'center'}}>
        <h1 style={{fontSize: 30, lineHeight: 1, fontWeight: 1000, color: "blue"}}>Distributorship Application Form</h1>
      </div>
      <div style={{display: "flex", flexDirection: 'column', margin: "0 auto", maxWidth: "90%"}}>
        <form onSubmit={handleSubmit}>
          <div className="formContainer">

            {
              formFields.map((data, key)=> {
                return(<FormRow key={key} data={data} />)
              })
            }

            <button className='submitButton' type="submit">
              <p>Apply</p>
            </button>
          </div>
        </form>
      </div>
    </div>
    </Context.Provider>
  )
}

export default distributorpage