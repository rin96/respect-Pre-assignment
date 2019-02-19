class numInput{
    constructor(getNum){
        this.getNum = getNum;
    }
    form(){
        if(this.getNum >= 2 && this.getNum <= 100 ){
            return this.getNum;
        }else{
            window.alert("2~100の範囲以外の数値が入力されました。");
            return false;
        }
    }
    primeNumberChk(primeNumber){
        if(primeNumber == 2 ){
            window.alert(`${primeNumber}は素数です`);
        }else{
            for(let i = 2; i < primeNumber; i++) {
                if(primeNumber % i == 0){
                    window.alert(`${primeNumber}は素数ではありません`);
                    break;
                }
                if(i + 1 == primeNumber) {
                    window.alert(`${primeNumber}は素数です`);
                }
            }
        }
    }
}

const numinput = new numInput(prompt('2~100の範囲の数字を入力してください'));
const primeNumber = numinput.form();
if(primeNumber != false){
    numinput.primeNumberChk(primeNumber);
}else{
    window.alert("正しい数値を入力してください");
}
/*
2~100までの数字を入力できる
入力された数字が素数であるかを判定して表示する
2~100以外の数字が入力されたらエラー表示
*/