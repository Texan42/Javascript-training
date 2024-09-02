//Testing file
import Button from "./button/button";
function Header(props) {
    const customStyle = {
        backgroundColor:"red"
    }
    const anotherColor = {
        backgroundColor:"green"
    }
    return <div>
        <Button theStyle={customStyle} text="Anything"/>
       
    </div>
}


export default Header;