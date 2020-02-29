function sequence(n){
    if(typeof n !== 'number' || n < 1){
        return 'Parameter harus bilangan positif!';
    }
    
    result={
        array :[n],
        count : 1
    };
    i = n;
    while(n > 1){
        n = n%2 > 0 ? n*3+1 : n/2;
        result.array.push(n);
        result.count += 1;
    };
    return "array : "+result.array+"  count : "+result.count;
};

console.log(sequence(13));
console.log(sequence(3));
console.log(sequence(-9));
