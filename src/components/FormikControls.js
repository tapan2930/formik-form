import React from 'react';
import ArrayFieldInput from './ArrayField';
import DateInput from './DataInput';
import Input from './input';

const FormikController = ({control, ...rest}) => {
    switch(control){
        case "input": return <Input {...rest} />
        case "date": return <DateInput {...rest} />
        case "arrayField": return <ArrayFieldInput {...rest} />
        default: return null
    }
}
 
export default FormikController;
