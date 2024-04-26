$(document).ready(function(){


    console.log("Hola mundo");

    let numero1 = 0;
    let numero2 = 0;

    let resultado = 0;

    const regex = /^\d+$/;

    $("#btnSumar").click(function(){


    
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");


        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe ingresar el primer número");
            $("#error1").css("color","red");
            return;
        }

        if(!regex.test(numero1)){
            $("#error1").text("Solo debe ingresar números");
            $("#error1").css("color","red");
            return;
        }
        

        numero2 = $("#numero2").val();

        console.log(numero1);
        console.log(numero2);

        if(numero2 === ""){
            $("#error2").text("Debe ingresar el segundo número");
            $("#error2").css("color","red");
            return;
        }

        if(!regex.test(numero2)){
            $("#error2").text("Solo debe ingresar números");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) + parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("color","blue")
        $("#resultado").css("fontSize","2rem");
        limpiar();

    })


    $("#btnRestar").click(function(){

      

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();

        if(numero1 == ""){
            
            $("#error1").text("Debe ingresar el primero numero");
            $("#error1").css("color","red");
            return;
        }

        if(!regex.test(numero1)){
            
            $("#error1").text("Debe igresar un valor numerico");
            $("#error1").css("color","red");
            return;

        }

        numero2 = $("#numero2").val();
        
        if(numero2 == ""){
            
            $("#error2").text("Debes ingresar el segundo valor");
            $("#error2").css("color","red");
            return;
            
        }

        if(!regex.test(numero2)){
            $("#error2").text("Debes ingresar un valor numero");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) - parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("color","blue")
        $("#resultado").css("fontSize","2rem");
        limpiar();

    });

    $("#btnMultiplicar").click(function(){
    
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();

        if(numero1 == ""){
            
            $("#error1").text("Debe ingresar el primero numero");
            $("#error1").css("color","red");
            return;
        }

        if(!regex.test(numero1)){
            
            $("#error1").text("Debe igresar un valor numerico");
            $("#error1").css("color","red");
            return;

        }

        numero2 = $("#numero2").val();
        
        if(numero2 == ""){
            
            $("#error2").text("Debes ingresar el segundo valor");
            $("#error2").css("color","red");
            return;
            
        }

        if(!regex.test(numero2)){
            $("#error2").text("Debes ingresar un valor numero");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) * parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("color","blue")
        $("#resultado").css("fontSize","2rem");
        limpiar();

    });

    $("#btnDividir").click(function(){

        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();

        if(numero1 == ""){
            
            $("#error1").text("Debe ingresar el primero numero");
            $("#error1").css("color","red");
            return;
        }

        if(!regex.test(numero1)){
            
            $("#error1").text("Debe igresar un valor numerico");
            $("#error1").css("color","red");
            return;

        }

        numero2 = $("#numero2").val();
        
        if(numero2 == ""){
            
            $("#error2").text("Debes ingresar el segundo valor");
            $("#error2").css("color","red");
            return;
            
        }

        if(!regex.test(numero2)){
            $("#error2").text("Debes ingresar un valor numero");
            $("#error2").css("color","red");
            return;
        }

        resultado = parseInt(numero1) / parseInt(numero2);

        $("#resultado").text(resultado);
        $("#resultado").css("color","blue")
        $("#resultado").css("fontSize","2rem");
        limpiar();

    });


    $("#btnLimpiar").click(function(){
        limpiar();
        limpiarResultado();
    })

    function limpiar(){
        $("#numero1").val("");
        $("#numero2").val("");
    }
    function limpiarResultado(){
        $("#resultado").text("");
    }


    $("#btnEsconder").click(function(){
        $("#div1").hide();
        $("#div2").hide();
        $("#div3").hide();
    });

    $("#btnMostrar").click(function(){
        $("#div1").show();
        $("#div2").show();
        $("#div3").show();
    });



});
