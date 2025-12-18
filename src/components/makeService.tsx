export default function MakeService(props:{service: any, description: any, image: any}){
return(
    <>
    <div id="service" className="flex flex-col w-[20vw] border-2">
        <h1>
            {props.service}
        </h1>
        <img src={props.image} alt="" />
        <p>
            {props.description}
        </p>
    </div>
    </>
)
}