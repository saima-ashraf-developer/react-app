import React from 'react';
import { useParams } from "react-router-dom";


const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>This is the Profile Page</h1>
          <p>hey,{name}</p>

        <div >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>, 
        </div>
      
    </div>
  );
};
export default Profile;