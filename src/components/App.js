import React from 'react';
import Post from './Post';


export default class App extends React.Component {
    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                <Post title="Aprendendo ReactJS"/>
                <Post title="ReactJS é Demais!"  />
                <Post title="Awesome!" />
                <Post title="first project on reactJS" />
            </div>
            
        );
    }
};