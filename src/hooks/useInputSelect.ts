import {ChangeEvent, useState} from "react";

interface InputPropsSelect<T> {
    value: T;
    set: React.Dispatch<React.SetStateAction<T>>
    onSelect: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const useInputSelect = <T>(initialValue: T): InputPropsSelect<T> => {
    const [value, setValue] = useState(initialValue)

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value as any)
    }

    return {
        value: value,
        set: setValue,
        onSelect: handleSelect,
    }
}

export default useInputSelect
