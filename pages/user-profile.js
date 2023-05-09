
const UserProfilePage = (props) => {
  return (
   <>
    <h1>{props.username}</h1>
   </>
  )
}
export async function getServerSideProps(context){
    const {params, req, res} = context;
    // console.log(req,res);
    console.log("server side code")
    return {
        props:{
            username:'Max'
        }
    }
}

export default UserProfilePage