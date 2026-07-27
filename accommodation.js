const accommodationCat = [
    {
        id: 1,
        image: 'Images/Balgownie/balgownie-estate-yarra-valley_171748569914.jpg',
        heading: 'Balgownie Estate',
        paragraph: 'This accommodation is next to the reception, it is also where the bridal party will be staying.  <br> Use <span style="font-weight: 600;cursor">L&AWEDDINGMAR27</span> for 10% off booking.',
        map: 'https://maps.app.goo.gl/DjGwT7h53MoMYUt77',
        link: 'https://app.mews.com/distributor/93470a07-76a8-4b32-bde8-b2ad017e18f4',

    },
    {
        id: 2,
        image: 'Images/Healesville inn.png',
        heading: 'Healeville Hotel',
        paragraph: 'Located in Healesville, near a lot of nice cafe and restaurants, located in the middle of the town.',
        map: 'https://maps.app.goo.gl/6B1jNBXKbNqEiHpe7',
        link: 'https://www.healesvillehotel.com/',

    },
    {
        id: 3,
        image: 'Images/TuckInn.png',
        heading: 'Tuck Inn',
        paragraph: 'Still in the town, though sligthly away from the main road, we have stayed here during one of our anniversaries to enjoy the country town. ',
        map: 'https://maps.app.goo.gl/4sAkSJTM34Wudzyc8',
        link: 'https://www.tuckinn.com.au/',

    },
    {
        id: 3,
        image: 'Images/yarraglen.png',
        heading: 'Yarra Valley grand Hotel',
        paragraph: '2nd cloesest to the reception venue, in the center of yarra glen too so plenty of cafe and restaurants with only a short distance to travel. ',
        map: 'https://maps.app.goo.gl/q1yEk2MRDjAN7Twd7',
        link: 'https://yarravalleygrand.com.au/',

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

                <div style="display:flex; flex-direction:row; gap:12px; align-items: center; justify-content:space-between; width: 100%; padding: 0px 20px 16px; box-sizing: border-box; ">
                    <button class="secondary" style="width:100%;" onclick="window.open('${accommodation.map}', 'blank')"> View Maps </button>
                    <button class="primary" style="width:100%;" onclick="window.open('${accommodation.link}', 'blank')"> Book Here </button>
                </div>
            
            
            </div>
            
        `
    });
})