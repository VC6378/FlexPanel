const pan = document.querySelectorAll('.panel');


function toggleClick(e){
    console.log("hello");
    this.classList.toggle('open');
}

function toggleChange(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

pan.forEach(panel=>panel.addEventListener('click',toggleClick));

pan.forEach(panel=>panel.addEventListener('transitionend',toggleChange));