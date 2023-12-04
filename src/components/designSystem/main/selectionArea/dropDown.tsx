import React, { useEffect, useRef, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { color } from '../../../../styles/theme';
import { MainImages } from '../../../../assets/main';

type dropDownType = 'default' | 'date';

interface propsType<T> {
    value?: T;
    type?: dropDownType;
    margin?: CSSProperties['margin'];
    width?: string;
    onChange: (value: T) => void;
    options: T[];
}

export const DropDown = <T extends string>({
    value,
    type = 'default',
    margin = 0,
    width = '100%',
    onChange,
    options,
}: propsType<T>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [data, setData] = useState<T>(value ? value : options[0]);
    const outsideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setData(value ? value : options[0]);
    }, [value, options]);

    useEffect(() => {
        function handleClickOutside(e: any) {
            if (outsideRef.current && !outsideRef.current.contains(e.target)) setIsOpen(false);
        }
        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, [outsideRef]);

    return (
        <>
            <Container ref={outsideRef} width={width}>
                <Selector onClick={() => setIsOpen(!isOpen)} $margin={margin}>
                    {data}

                    <ImgWrapper $isOpen={isOpen}>
                        <img src={type === 'default' ? MainImages.arrowUnderIcon : MainImages.calendarIcon} alt="" />
                    </ImgWrapper>
                </Selector>

                {isOpen && options && options.length > 0 && (
                    <Items width={width}>
                        {options
                            ?.filter((res) => data !== res)
                            .map((res, i) => {
                                return options.length - 2 === i ? (
                                    <Item
                                        onClick={() => {
                                            setData(res);
                                            setIsOpen(false);
                                            onChange(res);
                                        }}
                                        key={i}
                                        width={width}
                                    >
                                        {res}
                                    </Item>
                                ) : (
                                    <>
                                        <Item
                                            onClick={() => {
                                                setData(res);
                                                setIsOpen(false);
                                                onChange(res);
                                            }}
                                            key={i}
                                            width={width}
                                        >
                                            {res}
                                        </Item>
                                        <Devider />
                                    </>
                                );
                            })}
                    </Items>
                )}
            </Container>
        </>
    );
};

const Container = styled.div<{ width?: string }>`
    position: relative;
    width: ${({ width }) => width};
    display: flex;
    flex-direction: column;
    background: ${color.gray1};
    border-radius: 12px;
`;

const Selector = styled.div<{ $margin: CSSProperties['margin'] }>`
    position: relative;
    margin: ${({ $margin }) => $margin};
    padding: 10px 10px 10px 15px;
    width: 100%;
    height: 40px;
    z-index: 99;
    display: flex;
    background: ${color.gray1};
    border-radius: 12px;
    cursor: pointer;

    font-size: 16px;
    font-weight: 400;
`;

const ImgWrapper = styled.div<{ $isOpen?: boolean }>`
    position: absolute;
    right: 10px;
    display: flex;
    align-items: center;
    /* rotate: ${({ $isOpen }) => ($isOpen ? '180deg' : '0deg')}; */
    transition-duration: 0.5s;
`;

const Items = styled.div<{ width: string }>`
    position: absolute;
    margin-top: 50px;
    width: ${({ width }) => width};
    max-height: 180px; //
    z-index: 100;
    overflow: scroll;
    background: ${color.gray1};
    border-radius: 12px;
    box-shadow: 0px 1px 15px 0px rgba(0, 0, 0, 0.1);

    @keyframes dropDown {
        0% {
            max-height: 0px;
        }
        100% {
            max-height: 160px;
        }
    }
    animation: dropDown 0.5s ease;
`;

const Item = styled.div<{ width: string }>`
    padding-left: 15px;
    z-index: 0;
    display: flex;
    align-items: center;
    width: ${({ width }) => width};
    height: 45px;

    color: ${color.gray2};

    &:hover {
        color: ${color.gray7};
        cursor: pointer;
    }
`;

const Devider = styled.div`
    margin-left: 5%;
    width: 90%;
    height: 0px;
    border: 0.5px solid ${color.gray3};
`;
