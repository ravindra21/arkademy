function randomize(resLength){
    var prime =[2,3,5,7,11,13,17,19,23,29];
    var result = {
        array : [],
        sum : 0
    };
    
    for(i=0 ;i < resLength; i++){
        var rand = prime[Math.floor(Math.random()*(prime.length))];
        result.array.push(rand);
        result.sum += rand;
    };
    return "array : "+result.array+"  sum: "+result.sum;
};

randomize(5);
