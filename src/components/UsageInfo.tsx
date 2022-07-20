interface Props {
    count: number
    price: number
    testId: string
}

const UsageInfo = ({ count, price, testId }: Props) => {
    return <div className="flex gap-x-0.5">
        <div className="pr-4" data-testid={testId}>
            Usage Premium: {count} (EUR {price})
        </div>
    </div>
}
export default UsageInfo