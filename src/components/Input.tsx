import { ChangeEvent } from "react"

interface Props {
    name: string
    value: number | undefined
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    autoFocus?: boolean
    testId: string
}

const Input = ({ name, value, onChange, autoFocus, testId }: Props) => {
    return <div className="flex gap-x-0.5 mb-2 justify-between">
        <div className="pr-4">{name}</div>
        <input
            data-testid={testId}
            type="text"
            pattern="[0-9]*"
            className="input input-sm w-16 h-6 input-bordered"
            value={value}
            autoFocus={autoFocus}
            onChange={onChange}
        />
    </div>
}
export default Input