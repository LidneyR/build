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
        mesaCheck.parentNode.style.cssText="display:block"

    }
    containerCheckout.style.cssText="display:block"
}


formaRetirada=()=>{
       
    retiradavalue=document.getElementById('selectCheckout').value
    setMesa=document.getElementById('setMesa') 

    if(retiradavalue=='mesa'){
        setMesa.style.cssText="display:block"  

        if(localStorage.getItem("minhamesa")){
           
                alert('Continue comprando para mesa '+getminhamesa+', ainda está aberta!')
            
            
        }
        
    }else if(retiradavalue=='balcao'){
        setMesa.style.cssText="display:none" 
    }

    //Mesa Digitada
    setMesa.addEventListener('focusout', function(e){

        inpuMVaue=document.getElementById('inputMesa').value
        setminhamesa=localStorage.setItem("minhamesa",inpuMVaue);
        getminhamesa=JSON.parse(localStorage.getItem("minhamesa"))
              
        if(STATUSMESA==false){
            
            STATUSMESA=true
            console.log(getminhamesa)
            itensTotal.innerHTML+=`<div class='flagMesa'>`+getminhamesa+` </div>`;
            inpuMVaue.value=getminhamesa
        }   
          
    })

}


window.onload=()=>{

  
   if(localStorage.getItem("minhamesa")){
    getminhamesa=JSON.parse(localStorage.getItem("minhamesa"))
    console.log(getminhamesa)
    itensTotal.innerHTML+=`<div class='flagMesa'>Mesa`+getminhamesa+` </div>`;
    console.log(inpuMMesa)

    inpuMMesa.value=getminhamesa
    inpuMMesa.setAttribute("disabled","")
    inpuMVaue=getminhamesa
   }
 
}
