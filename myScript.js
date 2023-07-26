// 1- Belirlediğimiz sayı aralığında rasgele sayı üreten fonksiyonu yazınız


function rastgeleSayi(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
    
}
console.log(rastgeleSayi(1,15));

// 2- Elimizdeki people dizisiyle people2 yi oluşturalım.

// let people = ["Greg", "Mary", "Devon", "James"];
// console.log(people2)  -> ["Greg", "Elizabeth", "Mary", "Artie", "James"]

let people = ["Greg", "Mary", "Devon", "James"];

people.splice(1,0,"Elizabeth");

people.splice(3,1,"Artie");
let people2=(people);
console.log(people2);


// 3- 
// function dönüştürücü(text1) text1= mustafa_selman@gmail.com -> Mustafa Selman
// function dönüştürücü(text2) text1= mehmet_colak@hotmail.com -> Mehmet Colak
// function dönüştürücü(text3) text1= yasin_sezer@yandex.com -> Yasir Sezer
// bu üç veriyi de yanda yazılan çıktılara dönüştüren fonksiyonu yazın. (üç ayrı fonksiyon değil tek fonksiyon istiyoruz.)

function changeToName(text1){
    let secondChar=text1.indexOf("@");
    let fullname=text1.substr(0,secondChar);
    let replaced=fullname.replace("_", " ");
    let words=replaced.split(" ");
    let capitalizedWords=words.map(word=>word.charAt(0).toUpperCase()+word.slice(1));
    let capitalizedName=capitalizedWords.join(" ");
    return capitalizedName;

}
let text1='mustafa_selman@gmail.com';
console.log(changeToName(text1));


// 4- let sayilar = [12,34,2,3,67,66,5,24]
// function maxSecond(sayilar) -> elimizdeki dizinin en büyük ikinci değerini veren fonksiyon
// function minSecond(sayilar) -> elimizdeki dizinin en küçük ikinci değerini veren fonksiyon
// yukarıdaki fonksiyonları oluşturunuz.


// a. Dizinin en büyük ikinci değerini veren fonksiyon:

let sayilar1 = [12,34,2,3,67,66,5,24]

function maxSecond(sayilar1){

    console.log(sayilar1.sort(function(a,b){return a-b}));
    console.log(sayilar1.length);
    let x=(sayilar1[sayilar1.length-2]);
    console.log("En buyuk ikinci değer:" + x);
}
maxSecond(sayilar1);


// b. Dizinin en küçük ikinci değerini veren fonksiyon:

        let sayilar2 = [12,34,2,3,67,66,5,24]

        function minSecond(sayilar2){

                console.log(sayilar2.sort(function(a,b){return a-b}));
                let y=sayilar2[1];
                console.log("En küçük ikinci değer:" + y);
}
minSecond(sayilar2);
