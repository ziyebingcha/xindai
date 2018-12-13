function splitK(num) {
    var decimal = String(num).split('.')[1] || '';//小数部分
    var tempArr = [];
    var arr=[];
    var revNumArr = String(num).split('.')[0].split("").reverse();//倒序
    for (i in revNumArr){
        tempArr.push(revNumArr[i]);
        if((i+1)%3 === 0 && i != revNumArr.length-1){
            tempArr.push(',');
        }
    }
    for (j in decimal){
        arr.push(decimal[j]);
        if((j+1)%3 === 0 && j!= decimal.length-1){
            arr.push(',');
        }
    }
    var  an=arr.join('');
    var zs = tempArr.reverse().join('');//整数部分
    return decimal?zs+'.'+an:zs;
}

function tonum(num) {
    var NumArr = String(num).split(',');
    var zs = parseFloat(NumArr.join(''));
    return zs;
}
