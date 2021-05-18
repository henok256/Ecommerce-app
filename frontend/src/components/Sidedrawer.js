import './Sidedrawer.css';


const SideDrawer =({show}) =>{
    const sideDrawerClass = ["sidedrawer"];

    if(show){
        sideDrawerClass.push("show");
    }
    return show && <div className={sideDrawerClass.join(" ")}></div>
       
    

}

export default SideDrawer;