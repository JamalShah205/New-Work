function myFunction() {
    let input, ul, li, a, filter, txtvalue, i;
    input = document.getElementById('myinput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('myul');
    li = ul.getElementsByTagName('h4');

    // loop start
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName('a')[0];
        txtvalue = a.textContent || a.innerText;
        if (txtvalue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}