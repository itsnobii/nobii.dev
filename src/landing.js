document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".copy-btn");
    buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            var url = btn.getAttribute("data-url");
            if (url) {
                navigator.clipboard.writeText(url);
                btn.innerHTML = "✔️";
                setTimeout(function () {
                    btn.innerHTML = "\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" style=\"vertical-align:middle\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                            <rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\"/>\n                            <rect x=\"3\" y=\"3\" width=\"13\" height=\"13\" rx=\"2\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\"/>\n                        </svg>\n                    ";
                }, 1200);
            }
        });
    });
});
