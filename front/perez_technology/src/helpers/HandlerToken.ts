export const getToken = ()=>{
        return window.localStorage.getItem('perez_t')
}       
export const saveToken  = (arg: string)=>{
        window.localStorage.setItem('perez_t' , arg)
}


export const deleteToken  = ()=>{
        window.localStorage.removeItem('perez_t')
}
