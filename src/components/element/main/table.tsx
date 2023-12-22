import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { color } from '../../../styles/theme';
import data from '../../../data/businessList.json';
import { MainImages } from '../../../assets/main';

interface propsType {
    checkBox: boolean;
}

export default function Table({ checkBox }: propsType) {
    const businessListData = data.businessList;

    const [selectedCheckBox, setSelectedCheckBox] = useState<boolean>(false);
    const [selectedCheckBoxList, setSelectedCheckBoxList] = useState<boolean[]>([]);

    useEffect(() => {
        setSelectedCheckBoxList(Array(data.businessList.length).fill(false));
    }, []);

    const headerData = [
        {
            name: '공모 연도',
            width: '10%',
        },
        {
            name: '지역',
            width: '10%',
        },
        {
            name: '유형',
            width: '5%',
        },
        {
            name: '사업 유형',
            width: '25%',
        },
        {
            name: '사업명',
            width: '25%',
        },
        {
            name: '모임명/단체명',
            width: '15%',
        },
        {
            name: '대표자명',
            width: '5%',
        },
    ];

    return (
        <>
            <Container>
                <Header>
                    {headerData.map((v, i) => (
                        <Title style={{ width: v.width }} key={i}>
                            {v.name}
                        </Title>
                    ))}
                    <Title style={{ width: '5%', visibility: checkBox ? 'visible' : 'hidden' }}>
                        <CheckBoxWrapper
                            onClick={() => {
                                setSelectedCheckBox(!selectedCheckBox);

                                if (selectedCheckBox) {
                                    const newSelectedCheckBoxList = selectedCheckBoxList.map(() => false);
                                    setSelectedCheckBoxList(newSelectedCheckBoxList);
                                } else {
                                    const newSelectedCheckBoxList = selectedCheckBoxList.map(() => true);
                                    setSelectedCheckBoxList(newSelectedCheckBoxList);
                                }
                            }}
                            style={{
                                border: selectedCheckBox ? `1px solid ${color.primary}` : `1px solid ${color.gray6}`,
                            }}
                        >
                            <Img
                                style={{ display: selectedCheckBox ? 'block' : 'none' }}
                                src={MainImages.checkBoxIcon}
                                alt=""
                            />
                        </CheckBoxWrapper>
                    </Title>
                </Header>

                {businessListData.map((v, i) => (
                    <Line key={i}>
                        <Piece style={{ width: '10%' }}>{v.year}</Piece>
                        <Piece style={{ width: '10%' }}>{v.location}</Piece>
                        <Piece style={{ width: '5%' }}>{v.type}</Piece>
                        <Piece style={{ width: '25%' }}>{v.businessType}</Piece>
                        <Piece style={{ width: '25%' }}>{v.businessName}</Piece>
                        <Piece style={{ width: '15%' }}>{v.clubName}</Piece>
                        <Piece style={{ width: '5%' }}>{v.leaderName}</Piece>
                        <Piece style={{ width: '5%', visibility: checkBox ? 'visible' : 'hidden' }}>
                            <CheckBoxWrapper
                                onClick={() => {
                                    setSelectedCheckBoxList((prevList) => {
                                        const newList = [...prevList];
                                        newList[i] = !newList[i];
                                        return newList;
                                    });
                                }}
                                style={{
                                    border: selectedCheckBoxList[i]
                                        ? `1px solid ${color.primary}`
                                        : `1px solid ${color.gray6}`,
                                }}
                            >
                                <Img
                                    style={{ display: selectedCheckBoxList[i] ? 'block' : 'none' }}
                                    src={MainImages.checkBoxIcon}
                                    alt=""
                                />
                            </CheckBoxWrapper>
                        </Piece>
                    </Line>
                ))}
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 100%;
`;

const Header = styled.div`
    height: 55px;
    display: flex;
    align-items: end;
    background: ${color.primaryLighten1};
    border-bottom: 1px solid ${color.gray1};
    border-radius: 16px 16px 0px 0px;
`;

const Title = styled.div`
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    color: ${color.gray5};
`;

const Line = styled.div`
    height: 45px;
    display: flex;
    background: ${color.primaryLighten2};
    border-bottom: 1px solid ${color.gray1};
`;

const Piece = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
`;

const CheckBoxWrapper = styled.button`
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
`;

const Img = styled.img`
    cursor: pointer;
`;
