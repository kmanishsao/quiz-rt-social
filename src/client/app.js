import 'jquery';
import './styles/scss/main.scss';
import {} from '../../node_modules/material-design-lite/material.min';
import CreateChallengeController from './ui-component/challenge/controller/CreateChallengeController';

$('#challengeSection').on('click', '#create', CreateChallengeController.saveChallengeDetails);
CreateChallengeController.displaySideBar();
