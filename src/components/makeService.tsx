export default function MakeService(props:{service: any, description: any, image: any}){
return(
    <>
    <div id="service" className="flex bg-[#ffffff] flex-col w-[40vw] h-[75vh] border-2 justify-center items-center">
        <h1>
            {props.service}
        </h1>
        <p className="text-[24px] p-[5vw]">
            {props.description}
        </p>
    </div>
    </>
)
}