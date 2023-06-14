import ReactDOM from "react-dom/client"
import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import ReferenceSearch from "./ref/ReferenceSearch";
import RefAsStateChange from "./ref/RefAsStateChange";
import UserSearchRef from "./ref/UserSearchRef";

const App = () => {
    return (
        <div>
            <h1>Hi There!</h1>
        </div>
    )
};

ReactDOM.createRoot(document.getElementById("root")!).render(
    <UserSearchRef />
)