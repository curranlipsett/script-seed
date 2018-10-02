function onReady() {
  const langSelect = document.getElementById("langSelect");
  langSelect.onchange = function() {
    onChange(langSelect.value);
  };

  onChange("seeds/bash_seed.sh");
}

function onChange(seed) {
  fetch(seed)
    .then(function(response) {
      response.text().then(function(text) {
        var seedElement = document.getElementById("seedScript");
        seedElement.textContent = text;
        document.getElementById("downloadButton").href = seed;
        hljs.highlightBlock(seedElement);
      });
    })
    .catch(function(error) {
      console.error("Seed script request failed.", JSON.stringify(error));
    });
}

function copyToClipboard() {
  // Get the selected file, fetch it and copy write it to the clipboard.
  const langSelect = document.getElementById("langSelect");
  fetch(langSelect.value)
    .then(res => res.text())
    .then(text => {
      navigator.clipboard.writeText(text);
    });
}

onReady();
