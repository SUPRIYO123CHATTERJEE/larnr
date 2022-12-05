export default function TopHeader(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-blue fixed-top">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        <img src="/images/logo-dark.png" alt="Larnr Education" className="logo-img" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar5" aria-controls="navbar5" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbar5">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <a className="nav-link hover-nav" href="/articles">Articles</a>
                            </li>

                            <li className="nav-item ">
                                <a className="nav-link hover-nav" href="/courses">Courses</a>
                            </li>
                        </ul>
                        {props.children}

                    </div>
                </div>
            </nav>
        </div>
    )
}


export function RightTop() {
    return (
        <div>
            <ul className="navbar-nav mr-end">
                {/* {/* <!-- Authentication Links --> */}
                <li className="nav-item">
                    <a className="nav-link hover-nav" href="/login">Login</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link hover-nav" href="/signup">Register</a>
                </li>
                {/* <!-- Authentication Links --> */}
            </ul>
        </div>
    )
}