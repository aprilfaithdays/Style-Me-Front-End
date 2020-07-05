import React from 'react';
import Form from 'react-bootstrap/Form'


const FilterOptionsForm = (props) => {
    const option = props.option

    const handleChange = () => {
        let updated = {
            color: option.color, 
            amount: option.amount, 
            checked: !option.checked
        };


        props.checkFilter(updated)
    }

    return(
        <div>
            <Form>
                <div className="mb-3">
                    <Form.Check
                        type='checkbox'
                        // checked={option.checked}
                        label={`${option.color} (${option.amount})`}
                        onChange={handleChange}
                    />
                </div>
            </Form>
        </div>
    )
}

export default FilterOptionsForm