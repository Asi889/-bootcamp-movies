class Renderer {
    
    async renderData(movieData) {
        // $('#list').empty()
        const source = $(`#first-template`).html();
        const template = Handlebars.compile(source);
        let newHTML = template({movieData});
         $('#list').append(newHTML);

    }

    async renderDataRatings(moviedataById) {
        // $('#list').empty()
        const source = $(`#second-template`).html();
        const template = Handlebars.compile(source);
        let newHTML = template({moviedataById});
         $('.ratings').append(newHTML);

    }


}