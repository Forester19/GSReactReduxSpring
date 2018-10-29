import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {HeaderComponent, FooterComponent} from "./component/HeaderFooter";
import Sign from './component/LogIn'
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/holderReducers'


const history = createBrowserHistory();
const store = createStore(rootReducer);



class MainComponent extends React.Component {
    render() {
        return <Provider store={store}>
        <BrowserRouter history={history}>
                <HeaderComponent/>
                <Route path='/sign-in' render={function () {
                    return <Sign name='signin'/>
                }}/>
                <Route path='/sign-up' render={function () {
                    return <Sign name='signup'/>
                }}/>
                <FooterComponent/>
        </BrowserRouter>
        </Provider>;
    }
}



ReactDOM.render(<MainComponent />, document.getElementById('root'));


//serviceWorker.unregister();
