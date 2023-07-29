type actionable = {
    action: (arg: string) => void;
}

type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

type MenuElement = {
    texto: string,
    accion: ((arg: number) => void )  | ( (arg: number , target: string) => void ),
    clase: string,
    target: string,
    pointer: number
} & Partial<{ dtmAnimationType: string }>

type dtmResponse = {
    msg: string,
    status: number
}


type Botton = {
    texto: string,
    clase: string,
    mPointH: (arg: number) => void
}

type tIconoDescriptivo = {
    src: string,
    title: string,
    descripcion: string
}


type tIconDescriptionTitle = {
    title: string,
    description: string,
    src: string,
    type: string
}

type tBtnSphone = {
    src: string,
    handler: () => void
}

type tpUsuario = {
    name: string,
    phone: string,
    img: string,
    role: string,
    uid: number,
    deleteUser: (target: number) => void,
    showToolbox: (target: number)=> void 

}

type tpMensaje = {
    name: string,
    phone: string,
    img: string,
    uid: number,
    body: string,
    deleteMensaje: (arg: number) => void
}

type tpCategoria = {
    id: number, 
    label: string
}

type tpProveedor = { 
    id: number, 
    nombre: string 
}




type tpProducto ={
    uid: number
    nombre: string, 
    categoria: string 
    precio: number,
    cantidad: number,
    descripcion: string ,
    codigo: string, 
    proveedor: string 
}



type tpProductModal = {
    handlerClick: (arg: number)=>void,
    onClose: () => void
}

type tpWindowBorderTop = {
    onClose: ()=>void
    onBack: ()=>void
    title: string
}

type tpProductAddScreen = {
    categoryList: []
    proveedorList:[],
    onCreateNew: ()=>void,
    onClose: () => void
}



export type { actionable, MenuElement, Botton, tIconoDescriptivo, tIconDescriptionTitle, tBtnSphone, dtmResponse, tpUsuario, DialogProps, tpMensaje, tpProducto,tpProductModal , tpWindowBorderTop, tpProductAddScreen, tpProveedor , tpCategoria}