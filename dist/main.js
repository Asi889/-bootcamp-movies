const rend = new Renderer()


$(`#btn`).on("click", async function () {
    const $input = $(`#input`).val()
    console.log($input);
    const data = await $.get(`/movie/${$input}`)
    const resultP = JSON.parse(data).Search
    console.log(resultP);
    await rend.renderData(resultP)

})

$(`#list`).on("click", ".imgg",  async function () {
    const $movieId = $(this).closest(`div`).data().id
    const clickPic = await $.get(`/moviePic/${$movieId}`)
    const resultP = JSON.parse(clickPic).Ratings
    await rend.renderDataRatings(resultP)

    console.log(resultP);
})