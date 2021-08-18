import axios from 'axios';
import UiFileInputButton from "/components/UiFileInputButton"
import Members from '../components/Members';
import { useState } from 'react';

export default function Home({data}) {

  const [members, setMembers] = useState(data.data);

  const onDelete = async (person) => {
    const response = await fetch(
      `/api/members/${person._id}`,
      {
        method: "DELETE",
      }
    );
    const res = await response.json();
    setMembers(
      members.filter((e) => {
        return e !== person;
      })
    );
  };
  
  const onChange = async (formData, nam, fourD, designation) => {
    const config = {
      method: "POST",
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };

    var response = await axios.post('/api/members/pics', formData, config);

    var newPerson = {
      "nam":nam,
      "fourD": fourD,
      "designation": designation,
      "img": response.data.fname
    }

    response = await fetch("/api/members", {
      method: "POST",
      body: JSON.stringify(newPerson),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    setMembers([...members, res.data]);
  };

  return (
    <>
    <UiFileInputButton
      label="Upload Single File"
      uploadFileName="theFiles"
      onChange={onChange}
    />
    <Members members={members} onDelete={onDelete} />
    </>
  );

}

export async function getServerSideProps(ctx) {
  const { URL } = process.env
  const response = await fetch(URL + "/api/members");
  const data = await response.json();
  return {
    props: {
      data: data,
    },
  };
}