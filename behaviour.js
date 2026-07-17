



//NAVBAR & HEADER ELEMENT

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelectorAll(".navbar");

    navbar.forEach(navigation => {

        navigation.innerHTML += 
        `
        
            <nav>
                <ul>
                    <li><a href="index.html">Welcome</a></li>
                    <li><a href="schedule.html">On The Day</a></li>
                    <li> <a href="accommodation.html">Accommodation</a></li>
                    <li> <a href="rsvp.html">RSVP</a> </li>
                </ul>
            </nav>
    
        `
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
                <br>
                <p> 24 March 2027</p>
            </div>
    
        `
    });





    
})
