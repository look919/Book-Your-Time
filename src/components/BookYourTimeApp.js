import React from 'react'
import Header from './Header'
import '../firebase/firebase'

export default class BookYourTimeApp extends React.Component {
    state={
        bookDrawn: undefined
    }
    handleRandomPick = () =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(() => ({
            selectedOption: option
        }))
    }


    render(){


        return (
            <div className="content">
                <Header />
                <main className="home-page">
                    <h1 className="home-page__heading-primary">No idea what to do?</h1>
                    <p className="home-page__text">Looking for something to read but you have no idea what? You couldn't find a better place to look for it. Just click the button bellow and i will find something for you, I guarantee you won't regret it!</p>
                    <button className="button">Book Your Time</button>
                </main>
                
            
            
            
            </div>
        )
    }
}