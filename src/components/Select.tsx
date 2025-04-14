
import { Input } from "./input";


type Props = React.ComponentProps<"select"> & {
    legend?: string;
  };
  
  export function Select({ legend, ...rest }: Props) {
    return (
        <div className="flex items-center gap-4">
          <div className="flex flex-col flex-1">
            {legend && <label className="uppercase text-xxs mb-2 text-inherit">{legend}</label>}
            <select
              className="w-lg h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:border-2"
              {...rest}
            >
              <option value="" disabled hidden>
                Selecione
              </option>
              <option value="food">Alimentação</option>
              <option value="accommodation">Hospedagem</option>
              <option value="services">Serviços</option>
              <option value="transport">Transporte</option>
              <option value="others">Outros</option>
            </select>
          </div>
    
          <Input legend="Valor" type="number" placeholder="0,00" />
        </div>
      );
  }
  