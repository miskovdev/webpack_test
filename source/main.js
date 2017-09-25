/**
 * Created by Eduard.Miskov on 25.09.2017.
 */
export default function (array, className) {
    let menu = document.createElement("ul");
    menu.className = className;
    let listItems = '';
    array.forEach(function (item) {
        listItems += '<li>' + item + '</li>';
    });
    menu.innerHTML = listItems;
    return menu;
}