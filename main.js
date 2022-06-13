const show = () => {
    document.getElementById('my-menu').style.right = "0px";
    document.getElementById('show-btn').style.display = "none";
    document.getElementById('hide-btn').style.display = "block";
}
const hide = () => {
    document.getElementById('my-menu').style.right = "-220px";
    document.getElementById('show-btn').style.display = "block";
    document.getElementById('hide-btn').style.display = "none";
}