window.addEventListener('DOMContentLoaded', () => {
    function init() {
        // let request = new XMLHttpRequest();
        // request.open('GET', 'http://localhost:3000/people');
        // request.setRequestHeader('Content-type', 'application/json; charset = utf-8');
        // request.send();

        // request.addEventListener('readystatechange', function() {
        //     if (request.readyState === 4 && request.status == 200) {
        //         let data = JSON.parse(request.response);
        //         data.forEach(item => {
        //             let card = document.createElement('div');

        //             card.classList.add('card');

        //             let icon;
        //             if (item.sex === "male") {
        //                 icon = "icons/mars.png";
        //             } else {
        //                 icon = "icons/female.png";
        //             }

        //             card.innerHTML = `
        //             <img src="${ item.photo }" alt="persone">
        //             <div class = "name"> ${item.name}</div>
        //             <div class = " sex">
        //             <img src= ${icon} alt=${item.sex}>
        //             </div>
        //             <div class = "age"> ${item.age}</div>`;
        //             document.querySelector('.app').appendChild(card);

        //         });
        //     } else {
        //         console.error('Chto-to poshlo ne tak!');
        //     }
        // });
        fetch('https://mq917.github.io/site/db.json')
            .then(data => data.json())
            .then(data => createCards(data))
            .catch(err => console.error(err));
        this.remove();
    }

    function createCards(response) {
        response.forEach(item => {
            let card = document.createElement('div');

            card.classList.add('card');

            let icon;
            if (item.sex === "male") {
                icon = "icons/mars.png";
            } else {
                icon = "icons/female.png";
            }

            card.innerHTML = `
                        <img src="${ item.photo }" alt="persone">
                        <div class = "name"> ${item.name}</div>
                        <div class = " sex">
                        <img src= ${icon} alt=${item.sex}>
                        </div>
                        <div class = "age"> ${item.age}</div>`;
            document.querySelector('.app').appendChild(card);
        });
    }

    document.querySelector('.button').addEventListener('click', init, { "once": true });

});