formcheckout=document.getElementById('checkoutform')
itensTotal=document.getElementById("totalfinesh")
inpuMMesa=document.getElementById('inputMesa')

getCheckout=()=>{ 
    select=document.getElementById('selectValidate')
    text = select.options[select.selectedIndex].text;
    containerCheckout=document.getElementById('checkout')
    containerCheckout.setAttribute("class", "checkout") 
    selectCheck=document.getElementById('selectCheckout')
    optionsCheck=selectCheck.options[selectCheck.selectedIndex].text
    retiradavalue=0


    // VALIDA CAMPO HOME
    if(text=="Mesa"){
        mesaCheck=document.getElementById('selectMesaCheckout')
       
    }

    // VALIDA CAMPO CHECKOUT 
    if(optionsCheck=="Mesa"){ 
        mesaCheck.parentNode.style.cssText="display:flex"

    }
    containerCheckout.style.cssText="display:block"
}


formaRetirada=()=>{
       
    retiradavalue=document.getElementById('selectCheckout').value
    setMesa=document.getElementById('setMesa') 

    if(retiradavalue=='mesa'){
        setMesa.style.cssText="display:flex"   
    }else if(retiradavalue=='balcao'){
        setMesa.style.cssText="display:none"  
        inpuMVaue=0
    }

    //Mesa Digitada
    setMesa.addEventListener('focusout', function(e){
  
        inpuMVaue=document.getElementById('inputMesa').value.toString()
        // setminhamesa=localStorage.setItem("minhamesa",inpuMVaue);
        // getminhamesa=JSON.parse(localStorage.getItem("minhamesa"))
              
        // if(STATUSMESA==false){
            
        //     STATUSMESA=true 
        //     itensTotal.innerHTML+=`<div class='flagMesa'>`+getminhamesa+` </div>`;
   
        // }   
       

          
    })

}


window.onload=()=>{

    recebePedidos=[]


    
   
 
}
