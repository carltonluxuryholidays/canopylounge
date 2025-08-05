document.getElementById("uploadForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    const imgUrl = document.getElementById("imgUrl").value;
    const imgLink = document.getElementById("imgLink").value;

    const response = await fetch("images.json");
    const data = await response.json();

    data.push({ link: imgLink, src: imgUrl });

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "images.json";
    a.click();
});
