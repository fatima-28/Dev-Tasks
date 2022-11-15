 let maindiv = document.querySelector('.main');
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => data.forEach(item => {
        let div = ` <div id="mydiv">
                   <img src="${item.flags.png}">
                    <h3>${item.name.common}</h3>
                    <p>${item.capital}</p>
                    <p>${item.name.official}</p>
                    </div>`;

        maindiv.innerHTML += div;


      }));
