type actionable = {
    action: (arg: string) => void;
}

type MenuElement = {
    texto: string,
    accion: (arg: number) => void,
    clase: string,
    target: string,
    pointer: number
} & Partial<{dtmAnimationType:string}>


type Botton = {
    texto: string,
    clase: string
}

type tIconoDescriptivo = {
    src: string, 
    title   :string,
    descripcion: string
}


type tIconDescriptionTitle = {
    title: string , 
    description:string,
    src: string,
    type: string
}

type tBtnSphone = {
    src: string , 
    handler: ()=>void
}


export type { actionable, MenuElement, Botton , tIconoDescriptivo, tIconDescriptionTitle, tBtnSphone}