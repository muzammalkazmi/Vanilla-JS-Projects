var rgbcolors=['red','green','blue','black','pink','green']
var colors=document.querySelector('.colors')
btn=document.getElementById('btn')
btn.addEventListener('click',function(){
    const randomNumber=getRandomNumber()
    document.body.style.backgroundColor=rgbcolors[randomNumber]
    colors.innerHTML=rgbcolors[randomNumber]
})
function getRandomNumber(){
    return Math.floor(Math.random()*rgbcolors.length)
}
