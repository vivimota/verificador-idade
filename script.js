function Verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value)>ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex=document.getElementsByName('radsex')
        var idade= ano - Number(fano.value)
        var genero= ''
        var img = document.createElement('img')
        img.setAttribute ('id' , 'foto')
        if(fsex[0].checked){
            genero='Homem'
            if(idade >= 0 && idade<10){
                //Criança
                img.setAttribute('src', 'foto-bebe-m1.png')

            }else if (idade< 21){
                //jovem
                img.setAttribute('src' , 'foto-jovem-m1.png')
            }else if (idade< 50){
                //adulto
                img.setAttribute('src','foto-adulto-m1.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m1.png')
            }
        }else if(fsex[1].checked){
                genero='Mulher'
                if(idade >= 0 && idade<10){
                    //Criança
                    img.setAttribute('src', 'foto-bebe-f1.png')
    
                }else if (idade< 21){
                    //jovem
                    img.setAttribute('src' , 'foto-jovem-f1.png')
                }else if (idade< 50){
                    //adulto
                    img.setAttribute('src','foto-adulto-f1.png')
                }else{
                    //idoso
                    img.setAttribute('src', 'foto-idoso-f1.png')
                }
        }
            res.style.textAlign= 'center'
            res.innerHTML=`Detectamos ${genero} com ${idade} anos `
            res.appendChild(img)
        
    }
}