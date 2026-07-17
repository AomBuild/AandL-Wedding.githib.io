


const accommodationCat = [
    {
        id: 1,
        image: 'Images/',
        heading: 'placeholder',
        paragraph: 'placeholder',
        cost: '',
        link: '',

    },



]

document.addEventListener('DOMContentLoaded', () => {

    const accomCat = document.querySelectorAll("accommodationCatalogue");

    accomCat.forEach(accommodation => {

        accommodation.innerHTML +=  
        `
            <p> test</p>
        `
    });
})