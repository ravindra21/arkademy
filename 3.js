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

sequence(13);
sequence(3);
sequence(-9);
