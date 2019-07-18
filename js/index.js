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



document.getElementById('word__filter').addEventListener('click', () => {
    document.getElementById('word__filter').classList.toggle('active');

    document.getElementById('filter__dropdown').classList.toggle('active');
})



$('.az input').change(function() {    
    if($(this)[0].checked == true){
        $(this).parent().addClass('active');
        $(this).parent().prevAll().removeClass('active');
        $(this).parent().nextAll().removeClass('active');
    }
});



