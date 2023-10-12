"use strict";

(function () {
    let $board = null;

    function render(text) {
        $board.innerHTML = text;
    }

    function buildHTML(data) {
        let result = `<pre>navigator.connection:\n`;
        for (let key in data) {
            const value = data[key];
            if (typeof value != "function") {
                const row = `${key}: ${value}`;
                result += `- ${row}\n`;
            }
        }
        result += "</pre>";
        return result;
    }

    function renderConnection(data) {
        const html = buildHTML(data);
        render(html);
    }

    function main() {
        $board = document.querySelector(".board");
        const connection = window.navigator.connection;
        renderConnection(connection);
        connection.addEventListener(
            "change",
            renderConnection.bind(connection)
        );
    }

    main();
})();
