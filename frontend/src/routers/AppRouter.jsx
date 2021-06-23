import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from 'components/ui/NavBar';
import ScreenHeros from 'pages/ScreenHeros';
import ScreenDetails from 'pages/ScreenDetails';
import Error404 from 'pages/Error404';

import { SearchContextProvider } from 'context/SearchContext';


const AppRouter = () => {
    return (
        <>
            <SearchContextProvider>
                <Router>
                    <NavBar />
                    <div className="container mt-5 p-5">
                        <Switch>
                            <Route exact path ="/" component={ScreenHeros} />
                            <Route path="/hero/:id" component={ScreenDetails} />
                            <Route path="/marvel" component={ScreenHeros} />
                            <Route path="/dc" component={ScreenHeros} />
                            <Route path="/add" component={ScreenDetails} />
                            <Route path="*" component={Error404} />
                        </Switch>
                    </div>
                </Router>
            </SearchContextProvider>
        </>)
    
}
 
export default AppRouter;