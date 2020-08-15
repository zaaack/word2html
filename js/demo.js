(function() {
    document.getElementById("document")
        .addEventListener("change", handleFileSelect, false);

    function handleFileSelect(event) {
        readFileInputEventAsArrayBuffer(event, function(arrayBuffer) {
            mammoth.convertToHtml({arrayBuffer: arrayBuffer})
                .then(displayResult)
                .done();
        });
    }

    function displayResult(result) {
        document.getElementById("output").innerHTML = result.value;
        console.log('result', result)
    }

    function readFileInputEventAsArrayBuffer(event, callback) {
        var file = event.target.files[0];

        var reader = new FileReader();

        reader.onload = function(loadEvent) {
            var arrayBuffer = loadEvent.target.result;
            callback(arrayBuffer);
        };

        reader.readAsArrayBuffer(file);
    }

    function escapeHtml(value) {
        return value
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
})();
