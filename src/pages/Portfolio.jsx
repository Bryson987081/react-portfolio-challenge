import pokedex from "../assets/pokedex.png";
import jate from "../assets/jate.png";
import noteTaker from "../assets/noteTaker.png";
import weatherDashboard from "../assets/weather.png";
import taskBoard from "../assets/taskBoard.png";
import myBlog from "../assets/myBlog.png";

import './Style.css'

export default function Portfolio() {
    const projects = [
        { 
            title: "Pokedex", 
            description: "Web app for searching for pokemon.", 
            imgSrc: pokedex,
            altImg: "Pokedex", 
            liveLink: "https://aharper2568.github.io/web-pokedex/", 
            gitHub: "https://github.com/aharper2568/web-pokedex" 
        },
        { 
            title: "Just Another Text Editor",
            description: "Web app that allows a user to add to a text editor with or without an internet connection.", 
            imgSrc: jate, 
            alt: "J.A.T.E.", 
            liveLink: "https://pwa-demo-uoex.onrender.com/", 
            gitHub: "https://github.com/Bryson987081/pwa-challange" 
        },
        { 
            title: "Note Taker", 
            description: "A web app that allows a user to add, update, and delete notes.", 
            imgSrc: noteTaker, 
            alt: "Note Taker", 
            liveLink: "https://note-taker-challange.onrender.com/", 
            gitHub: "https://github.com/Bryson987081/note-taker-challange" 
        },
        { 
            title: "Weather Dashboard", 
            description: "A web app that allows a user to search a city and the five day forecast is presented.", 
            imgSrc: weatherDashboard, 
            alt: "Weather Dashboard", 
            liveLink: "https://bryson987081.github.io/weather-dashboard/", 
            gitHub: "https://github.com/Bryson987081/weather-dashboard" 
        },
        { 
            title: "Task Board", 
            description: "A web app that allows a user to add a task and keep track of the progress of the task.", 
            imgSrc: taskBoard,
            alt: "Task Board",  
            liveLink: "https://bryson987081.github.io/task-board-challange/", 
            gitHub: "https://github.com/Bryson987081/task-board-challange" 
        },
        { 
            title: "My Blog", 
            description: "A blog web app.", 
            imgSrc: myBlog, 
            alt: "My Blog", 
            liveLink: "https://bryson987081.github.io/my-blog-challange/", 
            gitHub: "https://github.com/Bryson987081/my-blog-challange" 
        },
    ];

    return (
        <div className="container">
            <h1 className="text-center my-4">My Work</h1>
            <div className="row">
                {projects.map((project, index) => (
                    <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card h-100">
                            <img src={project.imgSrc} alt={project.title} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{project.alt}</h5>
                                <p className="card-text">{project.description}</p>
                            </div>
                            <div className="card-footer">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">View Project</a>
                                <a href={project.gitHub} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}