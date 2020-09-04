const rend = new Renderer()


$(`#btn`).on("click", async function () {
    const $input = $(`#input`).val()
    const data = await $.get(`/movie/${$input}`)
    const resultP = JSON.parse(data).Search
    await rend.renderData(resultP)

})

$(`#list`).on("click", ".poster", async function () {
    $(`.ratings`).toggle()
    const $movieId = $(this).closest(`div`).data().id
    const $movieId1 = $(this).closest(`div`).find(`.ratings`)
    const clickPic = await $.get(`/moviePic/${$movieId}`)
    const resultP = JSON.parse(clickPic).Ratings
    console.log(resultP);
    await rend.renderDataRatings(resultP, $movieId1)
})

$(`#list`).on("click", ".ratings", async function () {
    $(`.ratings`).toggle()
})









