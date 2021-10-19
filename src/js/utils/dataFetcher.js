const dataFetcher = function(url=null){

    const response = await fetch(url);
    const todoJSON = await response.json();
    
    return null;
}

export {dataFetcher}