import { useState } from 'react';

type UseHandleChange = {
    name: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const useHandleChange = (): UseHandleChange => {
    const [name, setName] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    return {
        name,
        handleChange,
    };
};

export default useHandleChange;