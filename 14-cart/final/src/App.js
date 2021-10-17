import React from 'react'
import { useGlobalContext } from './context'

// components
import Nav from './Navbar'
import CartContainer from './CartContainer'
// items
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//components
//import Nav from './components/nav/Nav'
import Footer from './components/Footer/Footer'
import ProductDetail from './components/ProductDetail/ProductDetail'

//pages
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import Cart from './pages/cart/Cart'
import Auth from './pages/account/Account'
import Collection from './pages/product/collection/Collection'
import Admin from './pages/admin/Admin'

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/cart'>
            <CartContainer />
          </Route>
          <Route exact path='/auth'>
            <Auth />
          </Route>
          <Route exact path='/product'>
            <Collection />
          </Route>
          <Route exact path='/product/:id'>
            <ProductDetail />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  )
}

export default App
