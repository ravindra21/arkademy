function triangle(row){
    var res='';
    
    //membuat segitiga biasa tanpa padding
    var arr =[''];

    for(i=0;i < row;i++){
        arr[i] ='';
        for(c=0; c<i+1; c++){
            arr[i] += "*";
        }
      arr[i]=arr[i].split('').join(' ');

        //membuat padding      
        var pad = (row+row-1) - arr[i].length;
        for(k=0; k < pad;k++){
            arr[i] = ' '+arr[i];
        }
    }
    
    //return hasilnya
    return arr.join('\n');
}

triangle(5);
