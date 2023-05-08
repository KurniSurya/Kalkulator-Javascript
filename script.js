function tambah() {
    var angka1 = parseInt(document.getElementById("angka1").value);
    var angka2 = parseInt(document.getElementById("angka2").value);
    var hasil = angka1 + angka2;
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function kurang() {
    var angka1 = parseInt(document.getElementById("angka1").value);
    var angka2 = parseInt(document.getElementById("angka2").value);
    var hasil = angka1 - angka2;
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function kali() {
    var angka1 = parseInt(document.getElementById("angka1").value);
    var angka2 = parseInt(document.getElementById("angka2").value);
    var hasil = angka1 * angka2;
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function bagi() {
    var angka1 = parseInt(document.getElementById("angka1").value);
    var angka2 = parseInt(document.getElementById("angka2").value);
    var hasil = angka1 / angka2;
    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}

function reset() {
    document.getElementById("angka1").value = "";
    document.getElementById("angka2").value = "";
    document.getElementById("hasil").innerHTML = "";
}
