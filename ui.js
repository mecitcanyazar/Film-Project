 // Arayüz işlemlerini burada yapacağız.
class UI {
    static addFilmToUI (newFilm) {

        // console.log(newFilm);
    
    //     <!-- <tr>
    //     <td><img src="" class="img-fluid img-thumbnail"></td>
    //     <td></td>
    //     <td></td>
    //     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //   </tr> -->
    
        const filmList = document.getElementById("films");
        // console.log(filmList);
        // += kullandık yeni bir film eklemek istediğimizde sadece = kullansaydık önceden bu HTML'de olanlar silinecekti.
        filmList.innerHTML += `
            <tr>
             <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
             <td>${newFilm.title}</td>
             <td>${newFilm.director}</td>
             <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
           </tr> 
        `
    }
    
    static clearInputs (element1,element2,element3){
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }
    
    static displayMessages  (message,type) {
        // <div class="alert alert-danger" role="alert">
        //     This is a danger alert—check it out!
        // </div>
    
        // Alert Oluşturma
    
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
    
        const cardBody = document.querySelectorAll(".card-body")[0];
    
        // Alerti Ekleme
        cardBody.appendChild(div);
    
        // Alerti 1sn sonra kaldırma
        setTimeout(function(){
            div.remove();
        },1000)
    
    }
    
    static loadAllFilms (films) {
    
    //     <!-- <tr>
    //         <td><img src="" class="img-fluid img-thumbnail"></td>
    //         <td></td>
    //         <td></td>
    //         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    //   </tr> -->
    
        const filmList = document.getElementById("films");  // id'si films olan tbody
    
        films.forEach(function(film){
            filmList.innerHTML += `
            <tr>
                <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
                <td>${film.title}</td>
                <td>${film.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr> 
            `
        });
    
    }
    
    static deleteFilmFromUI  (element) {
        // <!-- <tr>
        // //         <td><img src="" class="img-fluid img-thumbnail"></td>
        // //         <td></td>
        // //         <td></td>
        // //         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        // //   </tr> -->
        element.parentElement.parentElement.remove();
    }
    
    static clearAllFilmsToUI (){
    
        const filmList = document.getElementById("films")
    
        // filmList.innerHTML = "" // 1.yöntem ancak yavaş çalışıyor.
    
        while(filmList.firstElementChild !== null) { // Child olduğu sürece
            filmList.firstElementChild.remove();
        }
    }
     
}
