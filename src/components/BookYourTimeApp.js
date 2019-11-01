import React from 'react'
import Header from './Header'
import BookModal from './BookModal'
import {database, storage} from '../firebase/firebase'

export default class BookYourTimeApp extends React.Component {
    state={
        bookDrawn: undefined
    }
    handleRandomPick = () =>{
        const randomNum = Math.floor(Math.random() * 20+1)
        
        database.ref('books').on('value',(snapshot)=>{
            snapshot.forEach((childSnapshot) => {
                if(childSnapshot.val().id === randomNum){     
                    this.handleSetState(childSnapshot.val())
                    console.log(childSnapshot.val())
                }
            })
        })
    }
    handleSetState = (val ) =>{
        this.setState(()=> ({
            bookDrawn: {
                ...val
            },
        }))
    }
    handleClearSelectedOption = () =>{
        this.setState(()=> ({
            bookDrawn: undefined
        }))
    }


    render(){

        return (
            <div className="content">
                <Header />
                <main className="home-page">
                    <h1 className="home-page__heading-primary">No idea what to do?</h1>
                    <p className="home-page__text">Looking for something to read but you have no idea what? You couldn't find a better place to look for it. Just click the button bellow and i will find something for you, I guarantee you won't regret it!</p>
                    <button onClick ={this.handleRandomPick} className="button">Book Your Time</button>
                    <BookModal 
                    bookDrawn={this.state.bookDrawn}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                    handleRandomPick={this.handleRandomPick}
                    />
                </main>
                
            
            
            
            </div>
        )
    }
    
}