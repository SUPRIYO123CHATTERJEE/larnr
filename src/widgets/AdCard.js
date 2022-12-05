
export default function AdCard(props){
    return(
        <div>
            <div className="container">
            <div className="row">
              <div className={props.class || "col-md-7 p-4"} style={{ background: "rgba(15, 15, 15, 0.7)" }}>
                {props.children}
              </div>
            </div>
          </div>
        </div>
    )
}