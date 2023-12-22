import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { MainImages } from '../../../assets/main';
import { color } from '../../../styles/theme';

type iconType = 'select' | 'modify' | 'view';

interface propsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    width?: string;
    icon?: iconType;
    disabled?: boolean;
    click?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
    width = '100%',
    icon = 'select',
    disabled = false,
    click = false,
    onClick,
    title,
    style,
}: propsType) {
    return (
        <>
            <Container width={width} icon={icon} disabled={disabled} onClick={onClick} title={title} style={style}>
                <Img
                    src={
                        icon === 'select' && click
                            ? MainImages.click_selectIcon
                            : icon === 'modify' && click
                            ? MainImages.click_modifyIcon
                            : icon === 'view' && click
                            ? MainImages.click_viewIcon
                            : icon === 'select'
                            ? MainImages.default_selectIcon
                            : icon === 'modify'
                            ? MainImages.default_modifyIcon
                            : icon === 'view'
                            ? MainImages.default_viewIcon
                            : ''
                    }
                    alt=""
                />
            </Container>
        </>
    );
}

const Container = styled.button<{
    width: string;
    icon: string;
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ width }) => width};
    height: 70px;
    background: ${color.primaryLighten2};
    border-radius: 28px;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const Img = styled.img``;
