export default function MakeService(props:{service: any,header:any, description: any, image: any}){
return(
    <>
    <div id="service" className="flex bg-[#EAF0F6] flex-col w-[40vw] h-[75vh] border-2 justify-center items-center">
        <h1>
            {props.header}
        </h1>
        <p className="text-[24px] p-[5vw]">
            {props.description}
        </p>
    </div>
    </>
)
}