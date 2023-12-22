import React from 'react';
import styled from 'styled-components';
import { color } from '../../../styles/theme';
import { Stack } from '../../designSystem/common/stack';
import { DropDown } from '../../designSystem/main/selectionArea/dropDown';
import { useForm } from '../../../hooks/useForm';
import Input from '../../designSystem/main/selectionArea/input';
import Button from '../../designSystem/main/selectionArea/button';
import data from '../../../data/businessList.json';

export default function SelectionArea() {
    /** year 배열 */
    let yearOptions: string[] = [];
    // eslint-disable-next-line array-callback-return
    data.businessList.map((v, i) => {
        if (!yearOptions.includes(String(v.year))) yearOptions.push(String(v.year));
    });
    yearOptions.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
    /** location 배열 */
    let locationOptions: string[] = [];
    // eslint-disable-next-line array-callback-return
    data.businessList.map((v, i) => {
        if (!locationOptions.includes(v.location)) locationOptions.push(v.location);
    });
    /** type 배열 */
    const typeOptions = ['심사', '선정', '탈락'];

    const { form, setForm, handleChange } = useForm({
        year: yearOptions[0],
        location: locationOptions[0],
        type: typeOptions[0],
        businessType: '',
    });
    const { year, location, type, businessType } = form;

    return (
        <>
            <Container>
                <Stack gap={20}>
                    <Stack direction="column" gap={10}>
                        <Title>공모 연도</Title>
                        <DropDown
                            value={year}
                            type="date"
                            width="170px"
                            onChange={(v) => {
                                setForm((prevForm: any) => ({ ...prevForm, year: v }));
                            }}
                            options={yearOptions}
                        />
                    </Stack>

                    <Stack gap={20}>
                        <Stack direction="column" gap={10}>
                            <Title>지역</Title>
                            <DropDown
                                value={location}
                                width="170px"
                                onChange={(v) => {
                                    setForm((prevForm: any) => ({ ...prevForm, location: v }));
                                }}
                                options={locationOptions}
                            />
                        </Stack>
                    </Stack>

                    <Stack gap={20}>
                        <Stack direction="column" gap={10}>
                            <Title>유형</Title>
                            <DropDown
                                value={type}
                                width="170px"
                                onChange={(v) => {
                                    setForm((prevForm: any) => ({ ...prevForm, type: v }));
                                }}
                                options={typeOptions}
                            />
                        </Stack>
                    </Stack>

                    <Stack gap={20}>
                        <Stack direction="column" gap={10}>
                            <Title>사업 유형</Title>
                            <Input
                                name="businessType"
                                value={businessType}
                                onChange={handleChange}
                                placeholder="사업 유형"
                                width="170px"
                            />
                        </Stack>
                    </Stack>
                </Stack>

                <Stack gap={10} align="end">
                    <Button width="115px" type="outline" icon={true} onClick={() => {}}>
                        초기화
                    </Button>

                    <Button width="115px" onClick={() => {}}>
                        설정하기
                    </Button>
                </Stack>
            </Container>
        </>
    );
}

const Container = styled.div`
    padding: 30px;
    width: 100%;
    min-width: 1000px;
    display: flex;
    justify-content: space-between;
    background: ${color.primaryLighten1};
    border-radius: 16px;
`;

const Title = styled.div`
    font-size: 22px;
    font-weight: 600;
`;
