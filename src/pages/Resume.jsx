import resume from "../assets/resume.png";

export default function Resume() {
    return (
        <div className="container my-4">
            <h1 className="text-center mb-4">My Resume</h1>
            <div className="text-center">
                <img 
                    src={resume} 
                    alt="My Resume" 
                    className="img-fluid rounded shadow p-4" 
                    style={{ maxWidth: "70%"}}
                />
            </div>
            <div className="text-center">
                <a href={resume} download className="btn btn-primary mt-4">
                    Download Resume
                </a>
            </div>
        </div>
    );
}