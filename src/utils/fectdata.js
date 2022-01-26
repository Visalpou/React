export const fectData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

export const CutString =(str) =>{
    return str.join('')
}