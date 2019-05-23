import React from 'react';

const FormField = ({formdata,id,change}) => {

    const renderTemp = () => {
        let formTemplate = null;
        
        switch(formdata.element) {
            case('input'):
                formTemplate = (
                    <div>
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onChange={(event) => change({event, id})}
                        />
                    </div>
                )
            break;
            default:
                formTemplate = null;
        }

        return formTemplate;
    }

    return (
        <div>
            {renderTemp()}
        </div>
    );
};

export default FormField;