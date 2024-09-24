export default function Portfolio() {
    const projects = [
        { title: "Project 1", description: "Description for project 1", imgSrc: "https://placehold.co/400x400", link: "#" },
        { title: "Project 2", description: "Description for project 2", imgSrc: "https://placehold.co/400x400", link: "#" },
        { title: "Project 3", description: "Description for project 3", imgSrc: "https://placehold.co/400x400", link: "#" },
        { title: "Project 4", description: "Description for project 4", imgSrc: "https://placehold.co/400x400", link: "#" },
        { title: "Project 5", description: "Description for project 5", imgSrc: "https://placehold.co/400x400", link: "#" },
        { title: "Project 6", description: "Description for project 6", imgSrc: "https://placehold.co/400x400", link: "#" },
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
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>
                            </div>
                            <div className="card-footer">
                                <a href={project.link} className="btn btn-primary me-2">View Project</a>
                                <a href='https://github.com/Bryson987081' className="btn btn-secondary">GitHub Repo</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}