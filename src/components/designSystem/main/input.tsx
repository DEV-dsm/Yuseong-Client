import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { color } from '../../../styles/theme';
import { MainImages } from '../../../assets/main';

interface propsType extends InputHTMLAttributes<HTMLInputElement> {
    width?: string;
    iconClick?: () => void;
    autocomplete?: string;
}

export default function Input({
    name,
    value,
    onChange,
    iconClick,
    onKeyDown,
    placeholder,
    width = '100%',
    autocomplete = 'off',
}: propsType) {
    return (
        <>
            <Container width={width}>
                <button onClick={iconClick} style={{ height: '15px' }}>
                    <img src={MainImages.searchIcon} alt="" />
                </button>

                <InputWrapper
                    name={name}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    placeholder={placeholder}
                    autoComplete={autocomplete}
                />
            </Container>
        </>
    );
}

const Container = styled.div<{ width?: string }>`
    padding: 10px 20px;
    width: ${({ width }) => width};
    height: 45px;
    display: flex;
    align-items: center;
    gap: 15px;
    background: ${color.primaryLighten2};
    border: none;
    border-radius: 24px;
`;

const InputWrapper = styled.input`
    width: 100%;
    background: ${color.primaryLighten2};
    border: none;

    font-size: 18px;
    font-weight: 400;

    &::placeholder {
        color: ${color.gray4};
    }
`;
