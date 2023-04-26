
type Botton = {
    texto: String,
    accion: Function,
    clase?: String
}

type StarsTrain = {
    stars: Number[],
    size: Number,    
}

type Producto = {
    name: String,
    hora: String, 
    price: Number, 
    reviews: Number, 
    photo: String, 
    ratio: String
} & Partial<StarsTrain>


type Carousel1 = {
    items:  Producto[]
}

type itemMenuBody = Producto & Partial<StarsTrain>


interface MenuElement extends Botton  , Partial<HTMLDivElement> , Partial<{target: String}>{

}



export type { Botton  , MenuElement, StarsTrain, Producto, Carousel1, itemMenuBody}