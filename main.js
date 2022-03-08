function fetchData(){
    fetch('https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json')
    .then(response => {
        if (!response.ok) { throw Error("ERROR"); }
        //return response.json();
        return response.text();
   })
    .then(data => JSON.parse(data))
    .then(data =>{
        console.log(data);
        const html = data
        .map (main => {
            return `
            <div class="main">
            <div>${main['fakt.nr']}</div>
            <div>${main.forvaltning}</div>
            <div>${main.konterat}</div>
            <div>${main.konto}</div>
            <div>${main.leverantor}</div>
            <div>${main['org.nr']}</div>
            </div>
            `;
        })
        .join("");
        console.log(html);
        document.querySelector('#pp').insertAdjacentHTML('afterbegin', html);
    })
}
    fetchData();