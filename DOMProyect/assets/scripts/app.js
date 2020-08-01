const addMovieModal = document.getElementById('add-modal')
const startAddMovieButton = document.querySelector('header button')
const backdrop = document.getElementById('backdrop')
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')
const consfirmAddMovieButton = cancelAddMovieButton.nextElementSibling
const userInputs = addMovieModal.querySelectorAll('input')
const entryTextSection = document.getElementById('entry-text')
const deleteMovieModal = document.getElementById('delete-modal')
const movies = []

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block'
    }
    else {
        entryTextSection.style.display = 'none'
    }
}

const closeMovieDeletionModal = () => {
    toggleBackdrop()
    deleteMovieModal.classList.remove('visible')
}

const deleteMovie = movieId => {

    let movieIndex = 0
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++
    }
    movies.splice(movieIndex, 1)
    const listRoot = document.getElementById('movie-list')
    listRoot.children[movieIndex].remove()
}


const deleteMovieHandler = movieId => {
    deleteMovieModal.classList.add('visible')
    toggleBackdrop()
}

const closeMovieModal = () => {
    addMovieModal.classList.remove('visible')
}

const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li')
    newMovieElement.className = 'movie-element'
    newMovieElement.innerHTML = `
        <div class = "movie-element__image">
            <img src="${imageUrl}" alt = "${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating}/5 stars</p>
        </div>
    `
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id))
    const listRoot = document.getElementById('movie-list')
    listRoot.append(newMovieElement)
}

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible')
}

const showMovieModal = () => {
    addMovieModal.classList.add('visible')
    toggleBackdrop()
}

const backdropClickHandler = () => {
    closeMovieModal()
    closeMovieDeletionModal()
}

const cancelAddMovieHandler = () => {
    closeMovieModal()
    clearMovieInputs()
}

const clearMovieInputs = () => {
    for (const usrInput of userInputs) {
        usrInput.value = ''
    }
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value
    const imageURLValue = userInputs[1].value
    const ratingValue = userInputs[2].value
    if (
        titleValue.trim() === '' ||
        imageURLValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5')
        return
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageURLValue,
        rating: ratingValue
    }
    movies.push(newMovie)
    closeMovieModal()
    toggleBackdrop()
    clearMovieInputs()
    renderNewMovieElement(
        newMovie.id,
        newMovie.title,
        newMovie.image,
        newMovie.rating)
    updateUI()
}

startAddMovieButton.addEventListener('click', showMovieModal)
backdrop.addEventListener('click', backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler)
consfirmAddMovieButton.addEventListener('click', addMovieHandler)