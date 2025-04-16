import UploadSvg from "../assets/upload.svg"


type Props = React.ComponentProps<"input"> & {
    filename?: string | null
}


export function Upload({filename = null, ...rest} : Props) {
    return <div>
        <legend className="uppercase text-xxs mb-2 text-inherit">
            Comprovante
        </legend>

        <div className="flex items-center h-12 w-full rounded-lg border  border-gray-300 text-sm text-gray-100 bg-transparent outline-none  ">
            <input className="hidden" type="file" id="upload" {...rest}/>

            <span className="text-xs text-gray-100 flex-1 pl-4">{filename ?? "Selecione o arquivo"}</span>

            <label htmlFor="upload">
                <img className="bg-green-100 h-12 w-12 rounded-lg p-2 cursor-pointer" src = {UploadSvg} alt="Upload" />
                </label>

            
        </div>
    </div>
    
}


