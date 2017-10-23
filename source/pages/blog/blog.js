/**
 * Created by Eduard.Miskov on 25.09.2017.
 */
import './blog.scss';
import 'normalize.css';
import createMenu from '../../components/menu/menu';

var menu = createMenu(['Main', 'About us', 'Portfolio'], 'menu');
document.body.appendChild(menu);

console.log('blog js');
console.log($);