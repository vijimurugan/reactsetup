
import FullLayout from '../UI/Layout/FullLayout';
import LoginLayout from '../UI/Layout/LoginLayout';


import Home from '../Components/Home';
import TablesComp from '../Components/Table';
import FormsComp from '../Components/Form';
import Login from '../Components/Login';



var indexRoutes = [
    { path: '/', name: 'Home', component: Home, layout: FullLayout },
    { path: '/table', name: 'Table', component: TablesComp, layout: FullLayout },
    { path: '/form', name: 'Form', component: FormsComp, layout: FullLayout },
    { path: '/login', name: 'Login', component: Login, layout: LoginLayout },

];

export default indexRoutes;


