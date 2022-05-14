$(document).ready(
    function () {
        $("#view_button").click(getPictureUsingFetch);
    });



function getPictureUsingFetch() {
    var url = "https://api.nasa.gov/planetary/apod?api_key=GE5r6C7fP26s1Ta8sSkFkoJtNrvAdddi4FsCj1wS&date=" + $("#date").val();

    fetch(url, {
            method: "GET"
        })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            $("#title").text(data.title);
            $("#picture").attr("src", data.url);
        })
        .catch(function (err) {
            alert(error.responseText);
        });
}