import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { color } from '../../../../styles/theme';

interface propsType extends InputHTMLAttributes<HTMLInputElement> {
    width?: string;
    autocomplete?: string;
}

export default function Input({ name, value, onChange, placeholder, width = '100%', autocomplete = 'off' }: propsType) {
    return (
        <>
            <Container
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                width={width}
                autoComplete={autocomplete}
            />
        </>
    );
}

const Container = styled.input<{ width?: string }>`
    padding: 10px;
    width: ${({ width }) => width};
    height: 40px;
    background: ${color.gray1};
    border: none;
    border-radius: 12px;
    outline-width: 1px;
    outline-color: ${color.primary};

    font-size: 16px;
    font-weight: 400;

    &::placeholder {
        color: ${color.gray4};
    }
`;
