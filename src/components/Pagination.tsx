import { Button } from "./Button"

import Left from "../assets/left.svg"

import Right from "../assets/right.svg"






type Props = {
    current: number,
    total : number,
    onNext : () => void,
    onPrevious : () => void
}

export function Pagination({current, total, onNext, onPrevious} : Props) {
    return (
        <div className="flex flex-1 justify-center items-center gap-4">
            <Button onClick={onPrevious}  
            className="w-8 h-8 bg-green-100 rounded-lg cursor-pointer p-1" 
            disabled = { current === 1}>
                <img src= {Left} alt="Icone de voltar" />
            </Button>
            <span className="text-sm text-gray-200">
                {current}/ {total}
            </span>

            <Button disabled = {current === total } onClick={onNext} className="w-8 h-8  bg-green-100 rounded-lg cursor-pointer p-1">
                <img src= {Right} alt="Icone de avançar" />
            </Button>

        </div>
    )
}