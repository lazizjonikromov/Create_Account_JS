function hisob(){
    let son = document.getElementById("son1").value;
    let open = document.getElementById("select").value;
    let result = document.getElementById("result");
    let sum = 0;

    switch (open){
        case "toq":
            for(let i=1;i<=son;i++){
                if(i%2 == 1){
                    result.innerHTML +=i+" ";
                }
            }
        break;
        case "juft":
                for(let i=1;i<=son;i++){
                    if(i%2 == 0){
                        result.innerHTML +=i=" ";
                    }
                }
        break;
        case "tub":
                for(let i=1;i<=son;i++){
                    for(let d=1;d<=i;d++){
                        if(i%d == 0){
                            sum++;
                        }
                    }
                    if(sum == 2){
                        result.innerHTML +=i=" ";
                    }
                    sum = 0;
                }    
        break;      
        case "musbat":
            for(let i=1; i<=son; i++){
                if(i>0){
                    result.innerHTML +=i+" ";
                }
            }  
        break;
        case "manfiy":
            for(let i=1; i<=son; i++){
                if(i<0){
                    result.innerHTML +=i+" ";
                }
            }    
        break;
    }
}