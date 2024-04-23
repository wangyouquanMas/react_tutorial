
function ProfilePicture(){

    const imageUrl = './src/assets/profile.png';

    //by utilizing the event object , that gives us a lot of posibility we can do
    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e)=>handleClick(e)} src={imageUrl}></img>);
}
export default ProfilePicture