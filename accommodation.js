const accommodationCat = [
    {
        id: 1,
        image: 'Images/Balgownie/balgownie-estate-yarra-valley_171748569914.jpg',
        heading: 'Balgownie Estate',
        paragraph: 'This accommodation is next to the reception for ease of convience, it is also where the bridal party will be staying.',
        map: '',
        link: '',

    },
    {
        id: 2,
        image: 'Images/Scene/20260710_073936.jpg',
        heading: 'Healeville Hotel',
        paragraph: 'Located in Healesville, near a lot of nice cafe, restaurants and in the heart of town.',
        map: '',
        link: '',

    },
    {
        id: 3,
        image: 'Images/',
        heading: 'Tuck Inn',
        paragraph: 'In the Heart of Healesville, recommend this place for its ease of ',
        map: '',
        link: '',

    },
    {
        id: 3,
        image: 'Images/',
        heading: 'Yarra Valley grand Hotel',
        paragraph: '2nd cloesest to the reception venue, in the center of yarra glen too so plenty of cafe, restaurants. ',
        map: '',
        link: '',

    },



]


document.addEventListener('DOMContentLoaded', () => {

    

    const accomCat = document.querySelector(".accommodationCatalogue");

    accommodationCat.forEach(accommodation => {

        accomCat.innerHTML +=  
        `   
            <div class="accomCard">
                <img style="width:400px; height: 200px; object-fit:cover; border-radius: 0px;" src="${accommodation.image}">
                
                <div style="padding: 4px 20px;">
                    <h2> ${accommodation.heading}</h2>
                    <p style="height: 80px; overflow: auto;">${accommodation.paragraph}</p>
                </div>

                <div class="underline"></div>

                <div style="display:flex; flex-direction:row; gap:12px; align-items: center; justify-content:space-between; width: 100%; padding: 0px 16px 8px; box-sizing: border-box; ">
                    <button class="secondary" style="width:100%;" onclick="window.open('${accommodation.map}', 'blank')"> View Maps </button>
                    <button class="primary" style="width:100%;" onclick="window.open('${accommodation.link}', 'blank')"> Book Here </button>
                </div>
            
            
            </div>
            
        `
    });
})