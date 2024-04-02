// charger le footer 
<script>
    document.addEventListener ("DOMContentLoaded", function() {
        fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
    });
</script>

// date du jour 
<script>

    var currentDate = new Date();

    var formattedDate = currentDate.getDate() + '/' + (currentDate.getMonth() + 1) + '/' + currentDate.getFullYear();

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("last-updated").innerHTML += formattedDate;
    });
</script>

// Pour exécuter ce script dans une application Vue.js, vous pouvez le placer dans la méthode mounted() d'un composant Vue. Voici comment vous pourriez l'intégrer : Assurez-vous que l'élément avec l'ID "last-updated" est présent dans le template de votre composant Vue.
// a reussir a integrer dans un template