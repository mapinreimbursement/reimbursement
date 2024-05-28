 $('#amount').on('keyup',function(){
        var angka = $(this).val();
        var hasilAngka = formatRibuan(angka);
 
        $(this).val(hasilAngka);
    });
 
    function formatRibuan(angka){
        var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split           = number_string.split(','),
        sisa            = split[0].length % 3
        angka_hasil     = split[0].substr(0, sisa),
        ribuan          = split[0].substr(sisa).match(/\d{3}/gi);
 
        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        if(ribuan){
            separator = sisa ? '.' : '';
            angka_hasil += separator + ribuan.join('.');
        }
 
        angka_hasil = split[1] != undefined ? angka_hasil + ',' + split[1] : angka_hasil;
        return angka_hasil;
    }


	const scriptURL = 'https://script.google.com/macros/s/AKfycbw5iPxVydrj7_jou_ZqwajmDqVmRiHqUU1BpLiTucLXU8DiorASJ57nKGP13RWZly6O/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => alert("Data anda sudah disimpan, Silakan serahkan kwitansi asli ke admin untuk diserahkan ke bagian HRD"))
                .catch(error => console.error('Error!', error.message))
            })


form.addEventListener('submit', function handleClick(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll('#nrp, #nama, #diagnose, #patient, #amount, #date, #tempat, #tipe, #status');

  inputs.forEach(input => {
    input.value = '';
  });
});