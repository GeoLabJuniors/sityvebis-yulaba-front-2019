// open all popup by one code
var openPopup = document.querySelectorAll('.open__popup');
openPopup.forEach(function(click){
    click.addEventListener('click', function(e){
        document.querySelectorAll('.popup__close').forEach(function(mypopup){
            if(click.getAttribute('data-popup') ===  mypopup.getAttribute('data-popup')){
                mypopup.classList.toggle('active');
            }
        });

        e.stopPropagation();
        e.preventDefault();
    });
});




// stop propagation all popup
document.querySelectorAll('.popup').forEach(function(popup){
    popup.addEventListener('click', function(e){
        e.stopPropagation();
    });
});



// close popups by document click
document.addEventListener('click', function(e){
    document.querySelectorAll('.popup__close').forEach(function(pop){
        if(pop.classList.contains('active')){
            pop.classList.remove('active');
        } 
    });
});



document.getElementById('word__filter').addEventListener('click', () => {
    document.getElementById('word__filter').classList.toggle('active');

    document.getElementById('filter__dropdown').classList.toggle('active');
})




	// store tabs variable
    var myTabs = document.querySelectorAll(".tablink");
    
    function myTabClicks(tabClickEvent) {
            for (var i = 0; i < myTabs.length; i++) {
                myTabs[i].classList.remove("active");
            }
            var clickedTab = tabClickEvent.currentTarget;
            clickedTab.classList.add("active");
            tabClickEvent.preventDefault();
            var myContentPanes = document.querySelectorAll(".myform");

            for (i = 0; i < myContentPanes.length; i++) {
                myContentPanes[i].classList.remove("active");
            }

            var anchorReference = tabClickEvent.target;
            var activePaneId = anchorReference.getAttribute("href");
            var activePane = document.querySelector(activePaneId);
            activePane.classList.add("active");
        }

        for (i = 0; i < myTabs.length; i++) {
            myTabs[i].addEventListener("click", myTabClicks)
        }
