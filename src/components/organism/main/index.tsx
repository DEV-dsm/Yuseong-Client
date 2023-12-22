import React, { useState } from 'react';
import styled from 'styled-components';
import { Stack } from '../../designSystem/common/stack';
import SelectionArea from '../../element/main/selectionArea';
import Input from '../../designSystem/main/input';
import { useForm } from '../../../hooks/useForm';
import Table from '../../element/main/table';
import { color } from '../../../styles/theme';
import Button from '../../designSystem/main/button';
// import * as _ from './style';

/** @returns 메인 component */
export default function MainCompo() {
    const [btnDisabled, setBtnDisabled] = useState(false);

    const [clicks, setClicks] = useState({
        select: false,
        modify: false,
        view: false,
    });
    const [backgrounds, setBackgrounds] = useState({
        select: false,
        modify: false,
        view: false,
    });

    const [checkBox, setCheckBox] = useState(false);

    const { form, setForm, handleChange } = useForm({
        search: '',
    });
    const { search } = form;

    const ModifyType = () => {};

    return (
        <Container>
            <Wrapper>
                <Stack direction="column" gap={10}>
                    <Stack padding="0 30px 0 0" justify="end" gap={10}>
                        <Link
                            onClick={() => {}}
                            style={{ paddingRight: '10px', borderRight: `1px solid ${color.gray6}` }}
                        >
                            결과 보고서 등록
                        </Link>
                        <Link onClick={() => {}}>신청서 등록</Link>
                    </Stack>

                    <SelectionArea />
                </Stack>

                <Stack padding="0 30px" direction="column" gap={20}>
                    <Stack justify="space-between" align="flex-end">
                        <Input
                            name="search"
                            value={search}
                            onChange={handleChange}
                            onKeyDown={() => {}}
                            placeholder="무엇을 찾고 계시나요?"
                            width="400px"
                            iconClick={() => {}}
                        />

                        <Stack gap={10}>
                            <Button
                                width="70px"
                                click={clicks.select}
                                onClick={() => {
                                    setClicks((prevClicks) => ({
                                        ...prevClicks,
                                        select: !clicks.select,
                                    }));
                                    setBackgrounds((prevBackgrounds) => ({
                                        ...prevBackgrounds,
                                        select: !backgrounds.select,
                                    }));
                                    setBtnDisabled(!btnDisabled);
                                    setCheckBox(!checkBox);
                                }}
                                title="데이터 선택 버튼"
                                style={{ background: backgrounds.select ? color.primary : color.primaryLighten2 }}
                            />
                            <Button
                                width="70px"
                                icon="modify"
                                disabled={!btnDisabled}
                                click={clicks.modify}
                                onClick={() => {
                                    setClicks((prevClicks) => ({
                                        ...prevClicks,
                                        modify: !clicks.modify,
                                    }));
                                    setBackgrounds((prevBackgrounds) => ({
                                        ...prevBackgrounds,
                                        modify: !backgrounds.modify,
                                    }));
                                    ModifyType();
                                }}
                                title="유형 수정 버튼"
                                style={{ background: backgrounds.modify ? color.primary : color.primaryLighten2 }}
                            />
                            <Button
                                width="70px"
                                icon="view"
                                disabled={!btnDisabled}
                                click={clicks.view}
                                onClick={() => {
                                    setClicks((prevClicks) => ({
                                        ...prevClicks,
                                        view: !clicks.view,
                                    }));
                                    setBackgrounds((prevBackgrounds) => ({
                                        ...prevBackgrounds,
                                        view: !backgrounds.view,
                                    }));
                                }}
                                title="데이터 보기 버튼"
                                style={{ background: backgrounds.view ? color.primary : color.primaryLighten2 }}
                            />
                        </Stack>
                    </Stack>

                    <Table checkBox={checkBox} />
                </Stack>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    padding: 100px 0;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

const Link = styled.div`
    font-weight: 500;
    color: ${color.gray6};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;
