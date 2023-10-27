import React, { useContext, useState } from 'react'
import { Context } from '../routes/distributorpage'

const FormRow = (props) => {
    const [formData, setFormData] = useContext(Context)

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData({
            ...formData, [name] : value
        })

        console.log(formData)
    }

    const data = props.data

    if(data.length === 3){
        // setClassName("formColumn ")
    }


    return(
        <div className='formRow'>
            {
                data.map((e,key) => {
                    return(
                        <div key={key} className={(data.length === 2) ? "twocolumn": "formColumn"}>
                            <p className='formLabel'>{e.label}</p>
                            <input autoComplete='off' required className='formInput' onChange={handleChange} placeholder={e.placeholder} type={e.type} name={e.id} id={e.id} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FormRow