const setup = () => {


    let lblCursus = document.getElementById('lblCursus');
    lblCursus.addEventListener('click', change);
}
const change = () => {
    let lblCursus = document.getElementById('lblCursus');
    lblCursus.className = "cursus";

    let btnSend = document.getElementById('btnSend');
    btnSend.addEventListener('click', show);

}
const show = () => {
    let txtName = document.getElementById('txtName');
    if (txtName.value !== "") /* !== (Strikte vergelijking)
    !=  Vergelijking twee waarden oznder rekening te houden met hun type.
    JavaScript probeert automatisch de types te converteren (type coercion) voordat de vergelijking*/
    {
        alert("jouw naam is " + txtName.value);

        console.log("jouw naam is " + txtName.value);

        console.log(`jouw naam is ${txtName.value}`);

    }
    else
    {
        alert("gelieve naam in te vullen");
    }
}



window.addEventListener("load", setup);