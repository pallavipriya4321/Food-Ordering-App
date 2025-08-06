import SubHeading from "./SubHeading";

export default function Ratings({ children }){
    return(
        <SubHeading isLink = {true}>
            {children} ⭐️
        </SubHeading>
    );
};