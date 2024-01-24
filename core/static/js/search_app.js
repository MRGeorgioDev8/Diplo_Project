$(document).ready(function () {
    const searchInput = $("#search-input");
    const resultsContainer = $(".article-list");

    searchInput.on("input", function () {
        const query = $(this).val();

        if (query.trim() !== "") {
            resultsContainer.find(".article-item").hide();
        } else {
            resultsContainer.find(".article-item").show();
        }

        $.ajax({
            type: "GET",
            url: "/articles/search/",
            data: { query: query },
            success: function (data) {
                resultsContainer.empty();

                if (data.results.length > 0) {

                    resultsContainer.addClass("has-results");

                    data.results.forEach(function (result) {

                        const articleItem = $(`
                            <li class="article-item">
                                <h3>${result.title}</h3>
                                <p>${result.content}</p>
                                <p>Автор: ${result.author}</p>
                            </li>
                        `);

                        resultsContainer.append(articleItem);

                        articleItem.hide().fadeIn();
                    });
                } else {
                    resultsContainer.removeClass("has-results");
                }
            },
            error: function () {
                console.log("Error searching articles.");
            }
        });
    });
});