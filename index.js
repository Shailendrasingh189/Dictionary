const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector(".result");
const sound = document.getElementById("sound");
const btn = document.querySelector(".search-btn");
const word = document.querySelector("h3");

btn.addEventListener("click", () => {
    getSearch();

});

async function getSearch() {
    let inpWord = document.querySelector(".inp-word").value;
    // console.log(inpWord);
    let res = await fetch(url + inpWord);
    let data = await res.json();
    console.log(data);
    // console.log(data[0].meaning)

    try {
        result.innerHTML = `<div class="word">
                <h3>${data[0].word}</h3>
                <button onclick = "playSound()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>
                ${data[0].meanings[0].partOfSpeech}
                </p>
                <p>
                ${data[0].phonetic}
                </p>
            </div>

            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
                ${data[0].meanings[0].definitions[0].definition}
            </p>`;
    sound.setAttribute("src", data[0].phonetics[1].audio);
    console.log(sound);
    } catch {

        result.innerHTML = `<h2>Couldn't Find The Word </h2>`;
    }


};


function playSound() {
    sound.play();
};

