import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="hero-section-home">
                <div className="hero-section-dim">
                    <div className="hero-sub-section container mx-auto row align-items-center">
                        <div className="col-md-6">
                            <h1><i>One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time. ~Carl Sagan</i></h1>
                            <Link to="/books" className="btn btn-success w-50 my-3">View Books</Link>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;