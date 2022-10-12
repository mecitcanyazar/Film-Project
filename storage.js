class Storage {
    static addFilmToStorage (newFilm) {
        let films = this.getFilmsFromStorage();
    
        films.push(newFilm);
    
        /* 
        Bu kez array içine sadece string bir değer değil de object ekleyeceğiz.
        [
            {title:"delhfr",director:"tjglktg",url:"5161515"},
            {title:"delhfr",director:"tjglktg",url:"5161515"},
    
        ]
    
        */
    
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static getFilmsFromStorage () {
        // console.log(newFilm);
        let films;
    
        // Daha önceden localStorage'da bi şey var mı diye kontrol ediyorum.
        if (localStorage.getItem('films') === null) {
            films = [];
        } 
        else {
            films = JSON.parse(localStorage.getItem('films'));
        }
    
        return films ;
    
    }
    
    static deleteFilmFromStorage (filmTitle) {
        let films = this.getFilmsFromStorage();
    
        //splice
        films.forEach(function(film,index){
            if(film.title === filmTitle ) {
                films.splice(index,1) // bu objenin bulnduğu indexten bir tane sil.
            }
    
        })
        localStorage.setItem("films",JSON.stringify(films));
    }
    
    static clearAllFilmsToStorage () {
        
        localStorage.removeItem("films");
    }
}

