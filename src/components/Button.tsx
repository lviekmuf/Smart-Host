
interface Props {
    onClick: () => void
}

const Button = ({ onClick }: Props) => {
    return <div className="flex gap-x-0.5 mb-2">
        <button
            className="btn btn-outline btn-sm w-full"
            data-testid="submit"
            onClick={onClick}
        >
            Submit
        </button>
    </div>
}
export default Button