/**
 * Created by Eduard.Miskov on 25.09.2017.
 */
import './menu.scss';
import 'normalize.css';

export default function (array, className) {
    var menu = document.createElement("ul");
    menu.className = className;
    var listItems = '';
    array.forEach(function (item) {
        listItems += '<li>' + item + '</li>';
    });
    menu.innerHTML = listItems;
    return menu;
}