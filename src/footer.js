export default function Footer(props){
    return(
        <>
        <div className="footer top-line">
        <div className="container">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="/about">About us</a>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="/partner">Become A Partner</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tac">Terms and Condition</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/privacy">Privacy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/support">Support</a>
            </li>
          </ul>
          {props.children}
        </div>
      </div>
        </>
    )
}