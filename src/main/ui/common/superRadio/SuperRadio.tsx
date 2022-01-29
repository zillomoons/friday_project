import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from "./SuperRadio.module.css"

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        return onChangeOption ? onChangeOption(e.currentTarget.value) : onChange
        // onChange, onChangeOption
    }


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i} className={s.lRadio}>
            <input type={'radio'} value={o} name={name}
                   tabIndex={i + 1} checked={o === value}
                   onChange={onChangeCallback}/> {/*name, checked, value, onChange*/}
            <span>{o}</span>
        </label>
    )) : []

    return (
        <div className={s.radioWrapper}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
