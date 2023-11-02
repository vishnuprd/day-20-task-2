document.addEventListener('DOMContentLoaded', function(){
    const dogImage = document.getElementById("dog");
    const loadButton = document.getElementById("loadBtn");

    loadButton.addEventListener('click', function(){
        fetchRandomDogImage()
        .then((url) => {
            dogImage.src = url;
        })
        .catch((error) => {
            console.error("Error at Fetching Dog Image: ", error);
        });
    });

    function fetchRandomDogImage(){
        let myPromise = new Promise((resolve, reject) => {
            fetch('https://random.dog/woof.json')
            .then((response) => response.json())
            .then((data) => {
                resolve(data.url);
            })
            .catch((error) => {
                reject(error);
            })
        })
        return myPromise;
    }
})
