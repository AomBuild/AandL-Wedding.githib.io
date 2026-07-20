const accommodationCat = [
    {
        id: 1,
        image: 'Images/',
        heading: 'placeholder',
        paragraph: 'placeholder',
        cost: '$$',
        link: '',

    },



]


document.addEventListener('DOMContentLoaded', () => {

    

    const accomCat = document.querySelector(".accommodationCatalogue");

    accommodationCat.forEach(accommodation => {

        accomCat.innerHTML +=  
        `   
            <div>
                <img src="${accommodation.image}">
                <h2> ${accommodation.heading}</h2>
                <p>${accommodation.paragraph}</p>

                <div>
                    <p>${accommodation.cost}</p>
                    <button onclick="window.open('${accommodation.link}', 'blank')"> View Here </buttonp>
                </div>
            
            
            </div>
            
        `
    });
})