import { Child } from './Child';

const Parent = () => {
    return <Child color="white" onClick={() => alert("From Children")}>Click me</Child>
};

export default Parent;