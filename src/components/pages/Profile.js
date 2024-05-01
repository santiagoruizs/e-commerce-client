
const Profile = () => {
    const userEmail = localStorage.getItem('userEmail')
    return(
        <div>
            <h1>{userEmail}'s' profile</h1>
        </div>
    )
}
export default Profile;