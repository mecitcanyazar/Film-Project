const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");



// Tüm Eventleri Yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}



function addFilm (e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === "" ){
        // Hata

        UI.displayMessages("Tüm alanları doldurun...","danger");
    }
    else {
        // Yeni Film
        const newFilm = new Film(title,director,url); // film.js dosyasındaki oluşturduğumuz Film func.buraya atadık.

        UI.addFilmToUI(newFilm); // Arayüze film ekleme
        Storage.addFilmToStorage(newFilm); // Storage'a film ekleme
        
        UI.displayMessages("Film başarıyla eklendi...","success");


    }


    UI.clearInputs(titleElement,urlElement,directorElement);


    e.preventDefault();
}

function deleteFilm(e) {
    // console.log(e.target);
//     <!-- <tr>
//         <td><img src="" class="img-fluid img-thumbnail"></td>
//         <td></td>
//         <td></td>
//         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//   </tr> -->

    if (e.target.id === "delete-film" ){
        UI.deleteFilmFromUI(e.target);
        // filmin adına ulaşmak için a tag'ınden üst tage td ve ordan da kardeş elementi olan ilk td'ye ulaştık 
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        UI.displayMessages("Silme işlemi başarılı...","success");
    }
    
}

function clearAllFilms() {
    if(confirm("Emin misiniz ?")){
        UI.clearAllFilmsToUI();
        Storage.clearAllFilmsToStorage();
    }
}

