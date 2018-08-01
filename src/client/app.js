import 'jquery';
import './styles/scss/main.scss';
import {} from '../../node_modules/material-design-lite/material.min';
import CreateChallangeController from './ui-component/challange/controller/CreateChallangeController';
// import { MDCSelect } from '@material/select';

// const select = new MDCSelect(document.querySelector('.mdc-select'));
// select.listen('change', () => {
//   alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
// });
$('#challangeSection').on('click', '#create', CreateChallangeController.saveChallangeDetails);
CreateChallangeController.displaySideBar();
