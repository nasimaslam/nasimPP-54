var input = document.getElementById('input');
var my_Data = document.getElementById('my_Data');
var main_btn = document.getElementById('main_btn');
var select_me = document.getElementById('select_me');

main_btn.addEventListener('click',()=>{
    var value=input.value;
    var newElement=document.createElement('li');
    my_Data.appendChild(newElement);
    var firstDiv=document.createElement('div');
    firstDiv.innerHTML=value;
    newElement.appendChild(firstDiv);


    var secondDiv=document.createElement('div');
  
    newElement.appendChild(secondDiv);


    var secondElement=document.createElement('button');
    var check_Me=secondElement.classList.add('check');
    secondElement.innerHTML=`<i class="fas fa-check"></i>`;
    secondDiv.appendChild(secondElement);

    var thirdElement=document.createElement('button');
    var trush_Me=thirdElement.classList.add('trush');
    thirdElement.innerHTML=`<i class="fas fa-trash"></i>`;
    secondDiv.appendChild(thirdElement);
   

    if(input.value.length===0){
     // newElement.style.display="none";
        newElement.classList.add('none');
    }else{
       newElement.style.display="flex";
       newElement.classList.add('add-something');
    }
    input.value='';
    secondElement.addEventListener('click',()=>{
        firstDiv.classList.toggle('cross');
    });

    thirdElement.addEventListener('click',()=>{
        newElement.classList.add('deleted');
        newElement.addEventListener('transitionend',()=>{
            newElement.remove();
        });
    });

    select_me.addEventListener('click',(e)=>{
          var selected_value = e.target.value;

          if(selected_value==="completed"){
              if(firstDiv.classList.contains('cross')){
                newElement.style.display='flex';
              }else if(!firstDiv.classList.contains('cross')){
                newElement.style.display='none';
              }
          }
          if(selected_value==="uncompleted"){
            if(!firstDiv.classList.contains('cross')){
              newElement.style.display='flex';
            }else if(firstDiv.classList.contains('cross')){
              newElement.style.display='none';
            }
        }
        if(selected_value==="all"){
            if(newElement.classList.contains('add-something')){
              newElement.style.display='flex';
            }else if(!newElement.classList.contains('add-something')){

              newElement.style.display='none';
            }
        }

        


    })

});

