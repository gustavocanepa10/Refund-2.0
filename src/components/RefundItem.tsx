
export type RefundItemProps = {
    id : string,
    name : string,
    category : string,
    amount : string
}





type Props = React.ComponentProps <"a"> & {
    data : RefundItemProps
}


export function RefundItem({data, ...rest} : Props) {
    return <a  className="flex justify-between"{...rest}>

        

        <div className="flex flex-1 flex-col font-sans">
        <strong className="text-gray-100 font-semibold" >{data.name}</strong>
        <strong className="text-xs text-gray-200 font-light">{data.category}</strong>

        </div>

        <div>

        <span className="font-semibold font-sm">
            <small className="font-normal text-gray-200">R$</small>
            
            {data.amount}</span>

        </div>
        
            




      
    </a>
}