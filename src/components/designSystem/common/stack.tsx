import React, { ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';

interface propsType {
    width?: string;
    height?: number;
    display?: CSSProperties['display'];
    direction?: CSSProperties['flexDirection'];
    justify?: CSSProperties['justifyContent'];
    align?: CSSProperties['alignItems'];
    gap?: number;
    margin?: CSSProperties['margin'];
    padding?: CSSProperties['padding'];
    wrap?: CSSProperties['flexWrap'];
    children?: ReactNode;
    position?: CSSProperties['position'];
    cursor?: CSSProperties['cursor'];
    onClick?: () => void;
}

interface stylePropsType {
    width?: string;
    height?: number;
    display?: CSSProperties['display'];
    direction?: CSSProperties['flexDirection'];
    $justify?: CSSProperties['justifyContent'];
    $align?: CSSProperties['alignItems'];
    $gap?: number;
    $margin?: CSSProperties['margin'];
    $padding?: CSSProperties['padding'];
    wrap?: CSSProperties['flexWrap'];
    children?: ReactNode;
    $position?: CSSProperties['position'];
    cursor?: CSSProperties['cursor'];
}

export const Stack = ({
    width,
    height,
    display = 'flex',
    direction,
    justify,
    align,
    gap,
    margin,
    padding,
    wrap,
    children,
    position = 'static',
    cursor = 'default',
    onClick,
}: propsType) => {
    return (
        <Container
            width={width}
            height={height}
            display={display}
            direction={direction}
            $justify={justify}
            $align={align}
            $gap={gap}
            $margin={margin}
            $padding={padding}
            wrap={wrap}
            $position={position}
            cursor={cursor}
            onClick={() => onClick && onClick()}
        >
            {children}
        </Container>
    );
};

const Container = styled.div<stylePropsType>`
    width: ${({ width }) => width};
    height: ${({ height }) => height}px;
    display: ${({ display }) => display};
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ $justify }) => $justify};
    align-items: ${({ $align }) => $align};
    gap: ${({ $gap }) => $gap}px;
    margin: ${({ $margin }) => $margin};
    padding: ${({ $padding }) => $padding};
    flex-wrap: ${({ wrap }) => wrap};
    position: ${({ $position }) => $position};
    cursor: ${({ cursor }) => cursor};
`;
