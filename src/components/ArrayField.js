import React from 'react';
import { Field, ErrorMessage, FieldArray  } from 'formik'


const ArrayFieldInput = ({label, name, ...rest}) => {
    return ( 
        <div>
            <label htmlFor={name}>{label}</label>
            <FieldArray name={name} {...rest}>
                {
                (fieldArrayProps)=>{
                    console.log("Field Array Props",fieldArrayProps)
                    const { skills } = fieldArrayProps.form.values
                    const {push, remove} = fieldArrayProps
                    return <div> 
                        {
                            skills.map((skill,index)=>(
                                <div key={index}>  
                                    <Field name={`skills[${index}].skillName`}  />
                                    <Field name={`skills[${index}].profiency`}  />
                                   
                                    {
                                        skills.length > 1 &&  <button type="button" onClick={() => remove(index)}>-</button>
                                    }
                                   
                                    <button type="button" onClick={() => push({skillName:'', profiency:''})} >+</button>
                                    <ErrorMessage name={`skills[${index}].skillName`}  component="div" />
                                    <ErrorMessage name={`skills[${index}].profiency`}  component="div" />
                                </div>
                            ))
                            }
                           
                    </div>

                }}
             
            </FieldArray>
            
        </div>
     );
}
 
export default ArrayFieldInput;