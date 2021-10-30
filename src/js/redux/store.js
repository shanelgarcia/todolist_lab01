let store = null

function getStore(){
    return store
}

function createStore(data=[])
{
    if(store === null)
    {
        store = [...data]
    }
    return null
}
export {createStore,getStore}