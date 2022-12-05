
export default function Login() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-mycolor fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="/images/logo-dark.png" class="logo-img" alt="" />

                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                                <a class="nav-link hover-nav" href="/">Main</a>
                            </li>

                            <li class="nav-item ">
                                <a class="nav-link hover-nav" href="/courses">Courses</a>
                            </li>
                        </ul>

                        <ul class="navbar-nav mr-end">
                            {/* <!-- Authentication Links --> */}
                            <li class="nav-item active">
                                <a class="nav-link hover-nav" href="/login">Login</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link hover-nav" href="/signup">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- Navbar End --> */}
            <div class="contents page-height">
                <div class="bg-dark" style={{ minHeight: "82vh" }}>
                    <div class="container">
                        <div class="row pt-5 pb-5 justify-content-center">
                            <div class="col-md-6 bg-light block">
                                <div class="row p-2">
                                    <div class="col text-center">
                                        <h2>Login</h2>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                    </div>
                                </div>
                                <form method="POST" action="/login">
                                    <input type="hidden" name="_token" value="KHWLw5b3KwNInrvpNFtRZrX33QrXJRaHmpZltGPI" />
                                    <div id="_g-recaptcha"></div>
                                    <div class="g-recaptcha" data-sitekey="6LdfNpgaAAAAAFcl7dHnLS0zSvKbSEjdWOyR5kDe" data-size="invisible" data-callback="_submitForm" data-badge="bottomright"></div>
                                    <div class="row p-2">
                                        <div class="col-4 text-dark">
                                            E-Mail Address<span class="text-danger">*</span>
                                        </div>
                                        <div class="col-8">
                                            <input type="text" class="form-control " name="email" value="" required autocomplete="email" autofocus />

                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col-4 text-dark">
                                            Password<span class="text-danger">*</span>
                                        </div>
                                        <div class="col-8">
                                            <input type="password" class="form-control " name="password" value="" required autocomplete="current-password" />

                                        </div>
                                    </div>

                                    <div class="row p-2">
                                        <div class="col">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" name="remember" id="remember" />
                                                <label class="form-check-label" for="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <a href="https://app.larnr.com/password/reset">Do you forget password?</a>
                                        </div>
                                    </div>

                                    <div class="row p-2">
                                        <div class="col text-center">
                                            <button type="submit" class="btn btn-success btn-block">
                                                <i class="fa fa-sign-in"></i>
                                                Login
                                            </button>
                                        </div>
                                        <div class="col text-center">
                                            <button type="reset" class="btn btn-info btn-block">
                                                <i class="fa fa-close"></i>
                                                Clear
                                            </button>
                                        </div>
                                    </div>
                                    <div class="row p-2">
                                        <div class="col text-center">
                                            <a href="/signup" class="btn btn-primary btn-block">
                                                <i class="fa fa-id-card-o"></i>
                                                Register In Larnr.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* <!-- Error Display Section --> */}

                                    {/* <!-- Error Display Section --> */}
                                </form>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <!-- Copyright By --> */}
                <div class="container-fluid">
                    <div class="row p-3 m-0">
                        <div class="col-md text-center text-md-left">
                            <p class="text-dark">SDLearn v1.0.0</p>
                        </div>
                        <div class="col-md text-center">
                            <p class="text-dark">
                                &copy; Copyright By <a class="text-info" href="/">Larnr.com</a>.
                                2022
                            </p>
                        </div>
                        <div class="col-md text-center text-md-right">
                            <p class="text-dark">Developed By <a class="text-info" href="https://www.medust.com">Medust Technology Pvt Ltd.</a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- Copyright By --> */}

            </div>
        </div>
    )
}