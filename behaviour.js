



//NAVBAR & HEADER ELEMENT

document.addEventListener("DOMContentLoaded", () => {
    

    const navbar = document.querySelectorAll(".navbar");

    navbar.forEach(navigation => {

        navigation.innerHTML += 
        `
    
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

        
            <nav class="topNav">
                <ul>

                    <li class="icon">
                        <a class="hyperlink">
                            <i class="fa fa-bars"></i>
                        </a>
                    </li>

                    <li class="links"><a href="index.html">Welcome</a></li>
                    <li class="links"><a href="schedule.html">On The Day</a></li>
                    <li class="links"> <a href="accommodation.html">Accommodation</a></li>
                    <li class="links"> <a href="rsvp.html">RSVP</a> </li>

                    
                    
                </ul>
            </nav>
    
        `;

        const nav = navigation.querySelector(".topNav");
        const menuButton = navigation.querySelector(".icon");

        menuButton.addEventListener("click", () => {
            nav.classList.toggle("responsive");
        });
    });

    

    

    const header = document.querySelectorAll(".header");

    header.forEach(head => {

        head.innerHTML += 
        `
        
            <div class="HeroHeading">
                <h1>LAURA <br>
                    & <br>
                    ALESSANDRO
                </h1>
                <p>Join us for our Wedding Celebration</p>
                
            </div>
    
        `
    });

    const footer = document.querySelectorAll("footer");

    footer.forEach(foot => {

        foot.innerHTML += 
        `
        
            <div style="display:flex; flex-direction:column; gap:12px;" alt="footer Info">
                <h2>Laura & Alessandro</h2>
                
            </div>

            
            
    
        `
    });

    


    /*

        <div>
            <ul style="display:flex; flex-direction:row;flex-wrap:wrap;">
            <li><a href="index.html">Welcome</a></li>
            <li><a href="schedule.html">On the Day</a></li>
            <li><a href="accommodation.html">Accommodation</a></li>
            <li><a href="rsvp.html">RSVP</a></li>
            </ul>
        </div>

        <div class="rowFlex gap20 flexWrap" alt="balgownie Estate Location" 
                style="border: solid 1px #ffffff; border-radius: 4px;">

                <img src="Images/Balgownie/balgownie-estate-yarra-valley_171748569914.jpg" alt="Balgownie Estate Entrance" style="height: 260px;">

                <div class="gap12" style="display:flex; flex-direction: column; justify-content: space-between; padding: 12px; min-width:200px; width:20%">
                    <div class="gap4" style="display:flex; flex-direction: column;">
                        <p style="text-align:left;">Address:</p>
                        <h2 style="text-align:left;">1309 Melba Hwy, Yarra Glen VIC 3775, Australia</h2>
                    </div>

                    <div> 
                        <button style="width:100%;" onclick="window.open('https://maps.app.goo.gl/F6F9U3s1NJPR4WEa7', 'blank')"> Open In Maps</button>
                    </div>
                </div>
            
            </div>
    */


    
})
