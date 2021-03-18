import React, { useState } from 'react';
import FormField from './FormField';
import { assertions } from "../Helpers/assertions"
import Button from './Button';

export default function Form(allProps) {
    const { children, gap = "1x", ...allRest } = allProps

    return (
        <nu-form gap={gap}>
            {children}
        </nu-form>
    );
}