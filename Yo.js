'use strict'
window.addEventListener('load', function(){

    //CABEZERA
        $("h1").mouseover(function(){
            $(this).css('background', 'rgb(255, 162, 178)')

                $(this).animate({
                    width: '+=20px',
                    height: '+=20px'
            
                     }, 500);

                     
        })

        $("h1").mouseout(function(){
            $(this).css('background', 'pink')

                $(this).animate({
                    width: '-=20px',
                    height: '-=20px'
            
                     }, 500);


        })
    
   


    //MENU DE NAVEGACION 
    $('.menu li').mouseenter(function(){

        $(this).css('background', 'rgb(255, 162, 178)')
               .css('border-radius', '15%')
               .css('border','3px solid gray')
               

                $(this).animate({
                fontSize: '55px'

                },500)

                 
        
    })
    

    $('.menu li').mouseleave(function(){

        $(this).css('background', 'transparent')
                    .css('border','0px')

                 $(this).animate({
                    fontSize: '50px'

                 },300)
        
    
    
    })
    
    var currentUrl = window.location.href;

    if (currentUrl.includes('Compras.html')) {

        const IMGp = [
            { nombre: 'Sérum Hialurónico', img: 'imagenes/a1.png', precio: 15 },
            { nombre: 'Crema Antimanchas Neutrogena', img: 'imagenes/a2.png', precio: 17 },
            { nombre: 'Limpiador Hidratante', img: 'imagenes/a3.png', precio: 20 },
            { nombre: 'Mascarilla de Arcilla', img: 'imagenes/a4.png', precio: 50 },
            { nombre: 'Spray Hidratante Payot', img: 'imagenes/a5.png', precio: 5 },
            { nombre: 'Loción Hidratante CeraVe', img: 'imagenes/a6.png', precio: 10 },
            { nombre: 'Crema Cetaphil', img: 'imagenes/a7.png', precio: 7 },
            { nombre: 'Crema Antiarrugas Eucerin', img: 'imagenes/a8.png', precio: 60 },
            { nombre: 'Crema Antiarrugas', img: 'imagenes/a9.png', precio: 27 }
        ];
    
        IMGp.forEach(function(producto) {
    
            var plantilla = `
                <div style="width: 350px; height: 500px; box-sizing: border-box; text-align: center; padding: 15px">
                    <img src="${producto.img}" alt="${producto.nombre}" style="width: 250px; height: 300px; box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.4); background: white; border-radius: 15%; border: 5px solid pink;">
                    
                    <h2 style="font-family: Georgia, 'Times New Roman', Times, serif;">Precio: ${producto.precio} USD</h2>
                    <p style="font-family: Georgia, 'Times New Roman', Times, serif; font-size: 17px;">${producto.nombre}</p>
                    
                    <div style="max-width: 175px; width: 175px; max-height: 50px; height: 50px; margin: auto">
                        <button style="box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.4); font-size: 20px; width: 90%; height: 80%; background: #009bde81; border: 2px solid black; border-radius: 20%; font-family: Georgia, 'Times New Roman', Times, serif;">Añadir al carrito</button>
                    </div>
                </div>
            `;
    
            var content = $(plantilla);
            $('#Media').append(content);
        });
    }
    


       $('#Media div button').mouseenter(function(){
             $(this).css('background', 'rgb(255, 162, 178)');

                $(this).animate({
                    width: '+=10px',
                    height: '+=10px'
        
                         }, 500);

       })

       $('#Media div button').mouseleave(function(){
             $(this).css('background', '#009bde81');

                 $(this).animate({
                width: '-=10px',
                height: '-=10px'
   
                    }, 500);

  })



         $('#Media div img').mouseenter(function(){
            

                $(this).animate({
                    border: "10px solid rgb(255, 162, 178)",
                    width: '+=10px',
                    height: '+=10px'

                }, 500);

})

        $('#Media div img').mouseleave(function(){

                $(this).animate({
                    border: "5px solid pink",
                    width: '-=10px',
                    height: '-=10px'

                    }, 500);

})



       
    })