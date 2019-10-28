import React from 'react'
import Header from './Header'

export default class BookYourTimeApp extends React.Component {
    state={
        bookDrawn: undefined
    }



    render(){


        return (
            <div className="content">
                <Header />
                <main className="home-page">
                    <h1 className="home-page__heading-primary">No idea what to do?</h1>
                    <p className="home-page__text">Looking for something to read but you have no idea what? You couldn't find a better place to look for it. Just choose category then click the button bellow and i will find something for you, I guarantee you won't regret it!</p>
                </main>
            
            
            
            
            </div>
        )
    }
}