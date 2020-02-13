let daten = [{
    "name": "Marsalla",
    "feldid": "1",
    "cluster": "1"
}, {
    "name": "Theokrates",
    "feldid": "2",
    "cluster": "1"
}, {
    "name": "Wallis",
    "feldid": "3",
    "cluster": "2"
}, {
    "name": "Fritz",
    "feldid": "4",
    "cluster": "3"
}, {
    "name": "Franz",
    "feldid": "5",
    "cluster": "4"
}, {
    "name": "Hubert",
    "feldid": "6",
    "cluster": "4"
}];

function myFunction() {
    for (i = 0; i <= daten.length; i++) {
        var feldname = document.getElementById(daten[i].feldid);
        feldname.innerHTML = daten[i].name;

        var element = document.getElementById(daten[i].feldid);
        element.classList.add("group" + daten[i].cluster);
    }
}