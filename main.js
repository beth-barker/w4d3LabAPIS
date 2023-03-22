
let btn = document.querySelector('button')

function clickedBtn () {
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((res) => {
        const {residents} = res.data.results[0]
        for(let i = 0; i < residents.length; i++){
            axios.get(residents[i])
            .then((res) => {
                const {name} = res.data
                let response = document.createElement('h2')
                response.textContent = name
                console.log(response)
                document.body.appendChild(response)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    })
    .catch((err) => {
        console.log(err)
    })
    console.log(`button clicked`)
}

btn.addEventListener('click', clickedBtn)