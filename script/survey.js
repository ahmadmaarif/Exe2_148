function kirimData(){
    var name = document.getElementById("nama").value
    var email = document.getElementById("email").value
    var telp = document.getElementById("telp").value
    var tempat = document.querySelector("input[name=tempat]:checked").value
    var tiket = document.getElementById("tiket").value
    var pertanyaan = document.getElementById("pertanyaan").value

    
    alert(
        "Nama : " + name +
        "\nE-mail : " + email +
        "\nNomor telepon : " + telp +
        "\nTempat duduk : " + tempat +
        "\nBanyak tiket : " + tiket +
        "\nPertanyaan : " + pertanyaan 
    )
}