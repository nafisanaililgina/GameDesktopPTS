// looping
let pilihan = true;
alert('Selamat Datang di game Kertas, Batu, Gunting');
while(pilihan){
    
    

    //pilihan Player
    let p = prompt('Ayo Pilih mau Kertas, Batu, Gunting ?');

    // pilihan Komputer
    let comp = Math.random();

    if( comp < 0.34){
        comp = 'kertas';
    } else if ( comp >= 0.34 && comp < 0.67) {
        comp = 'batu';
    } else {
        comp = 'gunting';
    } 


    //Aturan Main
    let hasil = '';

    if ( p == comp) {
        hasil = 'Seri';
    } else if ( p == 'kertas'){
        hasil = (comp == 'batu') ? 'Anda Menang' : 'Komputer Menang';
    } else if ( p == 'batu'){
        hasil = (comp == 'gunting') ? 'Anda Menang' : 'Komputer Menang';
    } else if ( p == 'gunting'){
        hasil = (comp == 'kertas') ? 'Anda Menang' : 'Komputer Menang';
    } else {
        hasil = 'BISA MAINNYA GAK SIH?!';
    }

    

    // hasilnya
    alert('Anda Pilih : ' + p + '\nKomputer Pilih : ' + comp + '\nHasilnya : ' + hasil);

    pilihan = confirm('Mau Main Lagi ?');


}

alert('Terimakasih Sudah Main');