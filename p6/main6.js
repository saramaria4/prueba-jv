<script>


$( document ).ready(function() {
    var contador= 4;
    $("#btn_add").on("click",function(e){
        $("div").append("Elemento"+contador);
            contador ++ ;
    });   
});

    $("#btn_delete").on("click",function(e){
        $("li").first().remove();   
    });

</script>