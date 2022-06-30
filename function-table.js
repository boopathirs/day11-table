let num = 5;
let digi = 7;
let range;
function table(){
    for(i=1;i<=digi;i++){
        range = i*num;
        console.log(`${num}*${i}=${range}`);
    }
}
let result = table(num,digi);