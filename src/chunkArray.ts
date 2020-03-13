const chunkArray = (arr:Array<number>, len:number) => {
    // Init chunked arr
    const chunkedArr:Array<any> = [];

    //Looop through arr
    arr.forEach(val => {
        // Get Last Element
        const last:Array<number> = chunkedArr[chunkedArr.length - 1]

        //check if last and if last length is equal to the chunk len

        if (!last || last.length === len) {
            chunkedArr.push([val]);
        }
        else {
            last.push(val);
        }

    })

    return chunkedArr;
}

export default chunkArray;