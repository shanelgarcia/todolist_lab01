const link = function(textValue,className,path){

    const element = `<a class="${className}" href="${path}">${textValue}</a>`
    
    return element
}

export default link