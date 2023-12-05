function addnewwefield()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('wefield');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weob = document.getElementById('we');
    let weaddbuttonob = document.getElementById("weaddbutton");

    weob.insertBefore(newNode,weaddbuttonob);
}


function addnewaqfield()
{
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('aqfield');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqob = document.getElementById('aq');
    let aqaddbuttonob = document.getElementById("aqaddbutton");

    aqob.insertBefore(newNode,aqaddbuttonob);

}

function addnewskfield()
{

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-2');
    newNode.classList.add('skfield');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let skob = document.getElementById('sk');
    let skaddbuttonob = document.getElementById("skaddbutton");

    skob.insertBefore(newNode,skaddbuttonob);

}

//This function will generate the users cv
//It will take the values entered through the form fields and set them in the pre designed template accordingly
function generatecv()
{

    let namefield = document.getElementById('namefield').value;
    let namet1 = document.getElementById('namet1');

    namet1.innerHTML = namefield;
    document.getElementById('namet2').innerHTML = namefield;

    document.getElementById('contactt').innerHTML = document.getElementById('contactfield').value;
    document.getElementById('addresst').innerHTML = document.getElementById('addressfield').value;

    document.getElementById('fbt').innerHTML = document.getElementById('FBfield').value;
    document.getElementById('instat').innerHTML = document.getElementById('Instafield').value;
    document.getElementById('linkedint').innerHTML = document.getElementById('LDfield').value;

    document.getElementById('objectivet').innerHTML = document.getElementById('objectivefield').value;

    let wes = document.getElementsByClassName('wefield');
    let str = '';

    for(let e of wes)
    {
        str=str+`<li> ${e.value} </li>`;

    }

    document.getElementById('wet').innerHTML = str;



    let aqs = document.getElementsByClassName('aqfield');
    let str1 = '';

    for(let f of aqs)
    {
        str1=str1+`<li> ${f.value} </li>`;

    }

    document.getElementById('aqt').innerHTML = str1;


    let sks = document.getElementsByClassName('skfield');
    let str2 = '';

    for(let m of sks)
    {
        str2 = str2+`<li> ${m.value} </li>`;
    }

    document.getElementById('skt').innerHTML = str2;




    //code for the image

    let file = document.getElementById('imagefield').files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //code to set the image into template

    reader.onloadend= function () 
    {
        document.getElementById('imagetemplate').src=reader.result;
    };



    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';

    



}


function printcv()
{
    window.print();
}




function scrollDown() {
    // Adjust the scroll behavior based on your preference
    window.scrollBy({
        top: window.innerHeight, // You can adjust this value as needed
        behavior: 'smooth' // Add smooth scrolling effect
    });
}