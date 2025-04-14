type Props = React.ComponentProps<"button">  

   



export function Button({children,...rest} : Props) {
    return <button className="w-full h-12 rounded-md bg-green-100 font-sans text-white font-bold cursor-pointer "  type="submit" title="Entrar" {...rest}>
            {children}

        </button>


   

}