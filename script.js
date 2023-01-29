window.onload = function(){
    const button = document.getElementById("gererate-random-button");
    const title = document.getElementById("title");
    const externalLink = document.getElementById("external-link-svg");
    button.onclick = function(){
        console.log("clicked");
        fetch('https://api.jikan.moe/v4/random/anime')
            .then(response => response.json())
            .then(data =>{
                console.log(data);
                title.textContent = data["data"]["title"];
                externalLink.style.display = "block";
                externalLink.onclick = () => {
                    window.open(data["data"]["url"], '_blank');
                }
            })
            .catch(error => {
               console.error("There was a problem: ", error);
               alert(error)
            });
    }
}