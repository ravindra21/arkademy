function is_username_valid(usr){
    var ptrn = /^(\d)[a-z]{3,6}(\d)$/;
    var ptrn = ptrn.exec(usr);
    var sameDigit = ptrn[1]-ptrn[2];

    if(ptrn[0] && sameDigit==0){
        return true;
    };
    return false;
};

function is_password_valid(pwd){
    var ptrn = /^[a-z0-9\-]{7,11}$/.test(pwd);
    var numbers = pwd.match(/\d/g).length;
    var chars = pwd.match(/[a-z]/g).length;

    if(ptrn && numbers == chars){
        return true;
    }
    return false;
};

is_username_valid('6andi7');//return false
is_username_valid('1brah1');//return true
is_password_valid('andi-123');//return false
is_password_valid('1-2brah34');//return true
