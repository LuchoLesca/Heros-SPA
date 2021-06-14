import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from 'components/ui/NavBar';
import HerosSearching from 'pages/ScreenHeros';
import ScreenDetails from 'pages/ScreenDetails';
import AddHero from 'pages/AddHero';
import Error404 from 'pages/Error404';

import { SearchContextProvider } from 'context/SearchContext';


const AppRouter = () => {
    return (
        <>
            <SearchContextProvider>
                <Router>
                    <NavBar />
                    <div className="container mt-5">
                        <Switch>
                            <Route exact path="/hero/:name" component={ScreenDetails} />
                            <Route exact path="/marvel" component={HerosSearching} />
                            <Route exact path="/dc" component={HerosSearching} />
                            <Route exact path="/add" component={AddHero} />
                            <Route exact path ="/" component={HerosSearching} />
                            <Route path ="*" component={Error404} />
                        </Switch>
                    </div>
                </Router>
            </SearchContextProvider>
        </>
    );
}
 
export default AppRouter;