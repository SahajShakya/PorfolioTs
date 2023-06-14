interface ChildProps {
    color: string;
    onClick: () => void;
    children: string;
}
    export const Child = ( {color, onClick, children}: ChildProps ) => {
    return <><div>Hi {color}</div><button onClick={onClick}>{children}</button></>
}

//Tell TS as ChildProps is functional component

// export const Child:React.FC<ChildProps> = ({ color, onClick, children }) => { 
//     return(
//         <><div>Hi {color}</div><button onClick={onClick}>{children}</button></>
//     ) 
// }