

const getInfoButton = document.querySelector('#get-info-button')
const displayStarWars = document.querySelector('.results')

getInfoButton.addEventListener('click', fetchData)


async function fetchData(){

    const fetchStarWars = document.querySelector("#fetch-starwars").value.toLowerCase()

    try{
        const response = await fetch(`https://swapi.dev/api/people/?search=${fetchStarWars}`)

        if(!response.ok){
            throw new error('Could not fetch resource')
        }

        const data = await response.json()

        console.log(data)

        while (displayStarWars.firstChild) {
            displayStarWars.removeChild(displayStarWars.firstChild);
        }

        if (data.count > 0) {
          
            data.results.forEach(person => {
                const personSection = document.createElement('section');
                personSection.classList.add('person-info');

                const name = document.createElement('p');
                name.innerText = 'Name: ' + person.name;
                personSection.appendChild(name);

                const gender = document.createElement('p');
                gender.innerText = 'Gender: ' + person.gender;
                personSection.appendChild(gender);

                const birthYear = document.createElement('p');
                birthYear.innerText = 'Birth year: ' + person.birth_year;
                personSection.appendChild(birthYear);

                const height = document.createElement('p');
                height.innerText = 'Height: ' + person.height;
                personSection.appendChild(height);

                const mass = document.createElement('p');
                mass.innerText = 'Weight: ' + person.mass;
                personSection.appendChild(mass);

                const hairColor = document.createElement('p');
                hairColor.innerText = 'Hair color: ' + person.hair_color;
                personSection.appendChild(hairColor);

                const separator = document.createElement('hr');
                personSection.appendChild(separator);

                displayStarWars.appendChild(personSection);
            });
        } else {
            fullName.innerText = 'No results found';
            gender.innerText = '';
            birthYear.innerText = '';
            height.innerText = '';
            mass.innerText = '';
            hairColor.innerText = '';
        }
    }
    catch(error){
        console.error(error)
    }
}