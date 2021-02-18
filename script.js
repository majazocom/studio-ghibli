const baseUrl = 'https://meme-api.herokuapp.com/gimme';
const subredditDropDwn = document.getElementById('subreddits');
const btn = document.querySelector('button');
let selectedSub;
let dataSet;

const subredditArray = [
    'wholesomememes',
    'programmerhumor',
    'illegallysmolcats',
    'prequelmemes',
    'reactionsgifs',
    'interestingasfuck',
    'divorcedbirds',
    'memes'
];


//loopa över listan subrA
//för varje item så ska vi tjoffa in den som <option> 
//under <select> i html:en
for (let i = 0; i < subredditArray.length; i++) {
    let opt = document.createElement('option');
    opt.id = subredditArray[i];
    let text = document.createTextNode('r/' + subredditArray[i]);
    opt.appendChild(text);
    subredditDropDwn.appendChild(opt);
};

//när vi klickar på knappen ska vi ta in vilken sub som är vald
//för att sedan kalla på fetchen
btn.addEventListener('click', () => {
    selectedSub = subredditDropDwn.options[subredditDropDwn.selectedIndex].id;

    renderMemes();
});


//funktionen gimmeMemes(parametern subreddit och parametern antalet posts)
//gimmeMemes(wholesomeMemes, 50);
let gimmeMemes = (subReddit, count) => {
    let result = fetch(baseUrl + '/' + subReddit + '/' + count)
        .then(response => response.json())
        .then(data => { dataSet = data; console.log(dataSet) })
        .catch(error => console.log('det blev lite fel: ', error));
    return result;
};

let renderMemes = async () => {
    let memes = await gimmeMemes(selectedSub, 50);
    //render the memes to the gui
    console.log(memes);
};

