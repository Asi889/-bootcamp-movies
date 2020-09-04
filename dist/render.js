class Renderer {

    async renderData(movieData) {
        $('#list').empty()
        const source = $(`#first-template`).html();
        const template = Handlebars.compile(source);
        let newHTML = template({ movieData });
        console.log(newHTML);
        $('#list').append(newHTML);

    }

    async renderDataRatings(moviedataById, c) {
        $('#list').empty()
        // $(c).empty()
        const source = $(`#second-template`).html();
        const template = Handlebars.compile(source);
        let newHTML = template({ moviedataById });
        $(c).append(newHTML);

    }


}