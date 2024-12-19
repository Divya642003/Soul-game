let fs = document.getElementsByTagName("fieldset");
var n=0;
    
function start(){
    document.getElementsByTagName("section")[0].style.display="none";
    document.getElementsByTagName("form")[0].style.display="block";
    document.getElementsByTagName("audio")[0].play();
}
function pre()
{
    if(n>0)
    {
    fs[n].style.display = "none";
    fs[n-1].style.display ="flex";
     n-=1;
    }
}

function next()
{
    if(n<fs.length-1)
    {
    fs[n].style.display = "none";
    fs[n+1].style.display ="flex";
     n+=1;
    }
    if(n==6)
    {
       document.getElementsByTagName("button")[2].style.display="none";
       document.getElementsByTagName("button")[3].style.display="block";

    }
   
}
let sum=0;
function save(event)
{
   event.preventDefault();
    
    for(let i =0; i<fs.length; i++)
    {
        let selection = fs[i].querySelector('input[type="radio"]:checked');
        if(selection)
        {
            sum+=parseInt(selection.value);
           
        }
    }
   
   
  window.location.href ='/END/?sum=' + encodeURIComponent(sum);

}

