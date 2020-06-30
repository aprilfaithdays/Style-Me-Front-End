import React from 'react';
import Form from 'react-bootstrap/Form'


const FilterOptionsForm = (props) => {
    return(
        <div>
            <Form>
                <div className="mb-3">
                    <Form.Check 
                        type='checkbox'
                        // id={}
                        value={props.color}
                        label={`${props.color}(${props.amount})`}
                        onChange={e => props.checkFilter(e.target.value)}
                    />
                </div>
            </Form>
        </div>
    )
}

export default FilterOptionsForm

// <Form>
// <div key={`default-${props.key}`} className="mb-3">
//     {['checkbox'].map(() => (
//         <Form.Check 
//             type='checkbox'
//             // id={}
//             label={`${props.color}(${props.amount})`}
//         />
//     </div>
// ))}
// </Form> 