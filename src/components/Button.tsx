type Props = React.ComponentProps<"button">  & {
    title?: String
}

   



export function Button({title,...rest} : Props) {
    return <button className="w-full h-12 rounded-md bg-green-100 font-sans text-white font-bold "  type="submit" title="Entrar" {...rest}>
            {title}

        </button>


   

}