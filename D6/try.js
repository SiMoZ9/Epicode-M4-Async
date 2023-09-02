const getData = async () => {
    /*
    Await sempre dentro funzioni async
    In questo modo si usa il try catch
    */
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

console.log(getData());
