const link = function(label,path,className){

    const element = `<a class="${className}" href="${path}" data-path="${path}">${label}</a>`
    
    return element
}

export default link