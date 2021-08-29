import UiFileInputButton from "/components/UiFileInputButton"
import Members from '../components/Members';
import { useState, useEffect } from 'react';
import { projectStorage } from "/firebase/config";


export default function Home({data}) {

  const [members, setMembers] = useState(data.data);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    if(person){
      const storageRef = projectStorage.refFromURL(person.img);
      storageRef.delete();
    }
  }, [person])

  const onDelete = async (person) => {
    setPerson(person);
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
    setPerson(null);
  };
  
  const onChange = async (nam, fourD, designation, imgurl) => {

    var newPerson = {
      "nam":nam,
      "fourD": fourD,
      "designation": designation,
      "img": imgurl
    }

    const response = await fetch("/api/members", {
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
    <p className="text-3xl text-center">PGION</p>
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