export const JsonToFormData =(arg : object)=>{
    const bag = new FormData()
    Object.keys(arg).forEach((item ,index) =>{
        bag.set(item , String(Object.values(arg)[index]))
    })
    return bag
}