import { useState } from 'react';

/**
 * input의 여러 value 상태를 관리하는 함수
 * @param initialState data value
 * @returns form, setForm, handleChange
 */
export function useForm<T>(initialState: T) {
    /** form 저장 state */
    const [form, setForm] = useState<T>(initialState);

    /** input의 name과 value를 찾아 해당 name의 input의 value를 저장하는 함수 */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    return { form, setForm, handleChange };
}
