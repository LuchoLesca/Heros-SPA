import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from '../components/ui/NavBar';
import HerosSearching from '../pages/ScreenHeros';
import ScreenDetails from '../pages/ScreenDetails';


const AppRouter = () => {
    return (
        <>  
            <Router>
                <NavBar />
                <div className="container mt-5">
                    <Switch>
                        <Route exact path="/hero/:name" component={ScreenDetails} />
                        <Route exact path="/marvel" component={HerosSearching} />
                        <Route exact path="/dc" component={HerosSearching} />
                        <Route path ="/" component={HerosSearching} />
                    </Switch>
                </div>
            </Router>
        </>
    );
}
 
export default AppRouter;