export default function VideoCard(props){
    return(
        <>
            <div className="col-md-3 my-3">
              <div className="card h-100 box">
                <a href={props.link1}>
                  <img height="150" src={props.img} className="card-img-top" alt="ReactJS Tutorial: Environment Settings for E Commerce Website Development with Bootstrap and Sass" />
                </a>
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 m-0">
                      <a className="my-0" href={props.link2}>
                        <h6 className="card-title my-1">{props.title}</h6>
                      </a>
                      <small className="my-1 card-text">{props.description}</small><br />
                      <small className="my-1 card-text text-muted">{props.views}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}