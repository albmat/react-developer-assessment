import React from 'react';
import { FormattedDateProps } from '../types/utils'


const FormattedDate: React.FC<FormattedDateProps> = ({ isoString }) => {
    const date = new Date(isoString);

    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const formattedTime = date.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    return <p>{`${formattedDate} at ${formattedTime}`}</p>;
};

export default FormattedDate;