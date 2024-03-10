import React, {ChangeEvent, useState} from "react";

interface InputProps<T> {
    value: T;
    set: React.Dispatch<React.SetStateAction<T>>,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useInput = <T>(initialValue: T): InputProps<T> => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value as any)
    }

    return {
        value: value,
        onChange: handleChange,
        set: setValue,
    }
};


export default useInput
