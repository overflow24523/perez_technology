type actionable = {
    action: (arg: string) => void;
}

type MenuElement = {
    texto: string,
    accion: (arg: number) => void,
    clase: string,
    target: string,
    pointer: number
}


type Botton = {
    texto: string,
    clase: string
}

export type { actionable, MenuElement, Botton }