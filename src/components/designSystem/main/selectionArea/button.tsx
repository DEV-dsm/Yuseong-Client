import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { color } from '../../../../styles/theme';
import { MainImages } from '../../../../assets/main';

type backgroundType = 'solid' | 'outline';

interface propsType {
    width?: string;
    disabled?: boolean;
    type?: backgroundType;
    icon?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
}

export default function Button({
    width = '100%',
    disabled = false,
    type = 'solid',
    icon = false,
    onClick,
    children,
}: propsType) {
    return (
        <>
            <Container width={width} disabled={disabled} type={type} onClick={onClick}>
                {children}
                {icon && <img src={MainImages.resetIcon} alt="" />}
            </Container>
        </>
    );
}

const Container = styled.button<{
    width: string;
    type: backgroundType;
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width};
    height: 40px;
    background: ${({ type }) => (type === 'outline' ? color.gray1 : color.primary)};
    border: ${({ type }) => (type === 'outline' ? css`1px solid ${color.gray4}` : 'none')};
    border-radius: 20px;
    gap: 10px;

    font-size: 18px;
    font-weight: 500;
    color: ${({ type }) => (type === 'outline' ? color.gray7 : color.gray1)};

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
