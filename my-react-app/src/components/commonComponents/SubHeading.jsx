
export default function SubHeading({children, isLink = false,}){

    const color = isLink ? "text-blue-600" : "text-gray-700";
    return(
        <>
        <h6 className={`text-sm font-semibold ${color}`}>
        {children}
        </h6>
        </>
    );
};