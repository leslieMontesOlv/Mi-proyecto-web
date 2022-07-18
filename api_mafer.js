var idp=1;
var long=0;

    const url = " https://lesliemontesolv.github.io/mafer_api/mafer.json ";

    function buscar(){
    
        fetch(url)
        .then(function(response){
            return response.json();    
        })
    
        .then(function(data){
            console.log(data.figures);
            long=data.figures.length;
            console.log("lenght:"+ long);
        
            
            var res= data.figures.filter(item=>item.id===idp);
            console.log(res);
            var imagen=document.getElementById('figure');
            imagen.src=res[0].figure;
        })

        .catch(function(error){
            console.log(error);           
        });
        
        if (idp >= long){
            idp=1;
        }else{
            idp++;
        }

    }    