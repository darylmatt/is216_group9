


function fillTitle(id){
    var h1Div = document.getElementById('myModal').children[0].children[0].children[0].children[0];
    var h1Text = id.toUpperCase();

    h1Div.innerText = h1Text
    console.log(h1Text)
}