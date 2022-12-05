export default function Card(props){
    const image= props.image || "/images/service-1.jpeg)";
    return(
        <>
            <a href="#" class="col-md-4 px-3 my-2">
            <div class="cat m-0 p-0" style={{backgroundImage: `url(${image})`}}>
                <div class={props.class || "cat-2 cat-text"}>{props.text}</div>
            </div>
        </a>
        </>
    )
}