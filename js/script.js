function hitungLuas() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);
  
    if (!isNaN(alas) && !isNaN(tinggi)) {
      var luas = 0.5 * alas * tinggi;
      document.getElementById('hasil').innerText = 'Luas segitiga: ' + luas;
    } else {
      document.getElementById('hasil').innerText = 'Masukkan angka valid untuk alas dan tinggi';
    }
  }
  
  function hitungKeliling() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    var sisi_a = parseInt(document.getElementById('sisi_a').value);
    var sisi_b = parseInt(document.getElementById('sisi_b').value);
    var sisi_c = parseInt(document.getElementById('sisi_c').value);
    
    if(!isNaN(sisi_a)&& !isNaN(sisi_b)&& !isNaN(sisi_c)){
      var keliling = sisi_a + sisi_b + sisi_c;
      document.getElementById('hasil').innerText='Keliling segitiga: ' + keliling;
    } else {
      document.getElementById('hasil').innerText = 'Masukkan angka valid untuk sisi a,b dan c';
    }
  }
  