import { Encontro } from 'src/app/modelo/Encontro';
export class EncontroUtil {

    public static arrayEncontro(): Array<Encontro> {
        return [{ dia: 'SEG', horarioInicial: null, horarioFinal: null },
        { dia: 'TER',  horarioInicial: null, horarioFinal: null },
        { dia: 'QUA',  horarioInicial: null, horarioFinal: null },
        { dia: 'QUI',  horarioInicial: null, horarioFinal: null },
        { dia: 'SEX',  horarioInicial: null, horarioFinal: null },
        { dia: 'SAB',  horarioInicial: null, horarioFinal: null },
        { dia: 'DOM',  horarioInicial: null, horarioFinal: null }]
    }

}