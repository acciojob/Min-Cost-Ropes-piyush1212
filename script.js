function mincost(arr) {
    let totalCost = 0;
    
    // Sort the array initially
    arr.sort((a, b) => a - b);
    
    while (arr.length > 1) {
        // Take the two smallest ropes
        const rope1 = arr.shift();
        const rope2 = arr.shift();
        
        // Connect them and add their length to the total cost
        const combinedLength = rope1 + rope2;
        totalCost += combinedLength;
        
        // Put the combined rope back into the array
        arr.push(combinedLength);
        
        // Re-sort the array after pushing the combined rope
        arr.sort((a, b) => a - b);
    }
    
    return totalCost;
}

module.exports=mincost;
