const countrynameApi = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = country => {
    const countryContainer = document.getElementById('country-container');
    country.forEach(element => {
        console.log(element)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('col');
        countryDiv.innerHTML = `<div class="card">
        <img src="${element.flags.png}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">${element.name}</h3>
          <h5 class="card-title">Capital : ${element.capital}</h5>
          <h5 class="card-title">Region : ${element.capital}</h5>
          <h5 class="card-title">Sub Region : ${element.subregion}</h5>
          <h5 class="card-title">area : ${element.area} SquareMetere</h5>
          <h5 class="card-title">Type of country : ${element.independent === true ? 'Independent':'Unindependent'}</h5>
          <h5 class="card-title">Mother Language : ${element.languages[0].name}</h5>
        </div>
      </div>`;
      countryContainer.appendChild(countryDiv)
    })
}
countrynameApi()