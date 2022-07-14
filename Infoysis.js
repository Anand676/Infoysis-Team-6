var botton=document.getElementById('btn');
botton.addEventListener('click',showbg);
function showbg(){
    document.getElementById('tick').style.display='block';
    document.getElementById('btn').style.display='none';
    document.getElementById('text').style.color='#7b0473';
    document.getElementById('next').style.display='block';
    var d=new Date();
    document.getElementById('date').innerText=d;
}
function validate(){
    var value=document.getElementById('btn').checked;
    if(value==false){
        return false
    }
    if(document.getElementById('next').style.display!='none'){
        var p=/^[a-zA-Z]{4,20}$/
        var fname=document.getElementById('fullname').value;
        var placen=document.getElementById('placename').value;
        if(!p.test(placen)){
            return false
        }
        if(!p.test(fname)){
            return false
        }
    }

    return true

}