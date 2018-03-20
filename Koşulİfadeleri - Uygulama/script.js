/* var dogum = prompt("Doğum yılınızı giriniz");
var yil = 2018;
var yas = yil - dogum;

if(yas<18){
    console.log("hliyet Alamazsınız");
    console.log("Ehliyet alabilmek için " + (18-yas) + " yıl beklemelisiniz.")
}
else if(yas>=18){
    console.log("Ehliyet Alabilirsiniz");
}
else{
    console.log("Yanlış değer");
}
*/
var ay = prompt("Bulunduğunuz Ay hangi ay: ");
var res = ay.toUpperCase();
switch(ay){
    
    case 'Mart':
    case 'Nisan':
    case 'Mayıs':
        console.log('ilkbahar mevsimi');
        break;
    case 'Haziran':
    case 'temmuz':
    case 'ağustos':
        console.log('yaz mevsimi');
        break;
    case 'eylül':
    case 'ekim':
    case 'kasım':
        console.log('sonbahar mevsimi');
        break;
    case 'aralık':
    case 'ocak':
    case 'Şubat':
        console.log('kış mevsimi');
        break;
    default:
        console.log(' Yanlış bir değer girdiniz kontrol ediniz. ')
        
}