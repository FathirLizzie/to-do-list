// Mengambil elemen input dan list dari HTML berdasarkan ID
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Fungsi untuk menambahkan tugas baru ke dalam daftar
function addTask(){
    // Mengecek apakah input kosong, jika kosong, tampilkan alert
    if(inputBox.value === ''){
        alert("Kamu harus isi To-Do terlebih dahulu");
    }
    else{
        // Membuat elemen <li> baru untuk tugas
        let li = document.createElement("li");
        // Mengisi elemen <li> dengan nilai dari input
        li.innerHTML = inputBox.value;
        // Menambahkan elemen <li> ke dalam listContainer
        listContainer.appendChild(li);
        
        // Membuat elemen <span> untuk menambahkan tanda 'x' sebagai tombol hapus
        let span = document.createElement("span");
        // Mengisi <span> dengan simbol '×'
        span.innerHTML = "\u00d7";
        // Menambahkan <span> ke elemen <li>
        li.appendChild(span);
    }
    // Mengosongkan input setelah tugas ditambahkan
    inputBox.value = "";
    // Menyimpan data list ke localStorage
    saveData(); 
}

// Event listener untuk listContainer, menangani event klik
listContainer.addEventListener("click", function(e){
    // Jika elemen yang diklik adalah <li>, tambahkan atau hilangkan kelas 'checked' (penanda tugas selesai)
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // Simpan data setelah perubahan
        saveData();
    }
    // Jika elemen yang diklik adalah <span>, hapus elemen <li> (tugas) dari daftar
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // Simpan data setelah perubahan
        saveData();
    }
}, false);   

// Fungsi untuk menyimpan data list ke localStorage
function saveData(){
    // Menyimpan seluruh HTML dari listContainer ke dalam localStorage
    localStorage.setItem("data", listContainer.innerHTML);
}

// Fungsi untuk menampilkan tugas yang tersimpan di localStorage saat halaman di-load
function showTask(){
    // Mengambil data dari localStorage dan menampilkannya di listContainer
    listContainer.innerHTML = localStorage.getItem("data");
}

// Memanggil fungsi showTask saat halaman di-load agar tugas yang disimpan ditampilkan
showTask();
