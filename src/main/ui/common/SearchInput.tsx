import { ChangeEvent, useEffect, useMemo, useState } from "react"
import { debounce } from "../utils/debounce";
import SuperInput from "./superInput/SuperInput"

export const SearchInput = ({ onChange }: PropsType) => {
    const [text, setText] = useState('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }
    
    return (
        <div>
            <SuperInput placeholder="Search"
                value={text}
                onChange={handleChange} />
        </div>
    )
}
type PropsType = {
    onChange: (value: string) => void
}