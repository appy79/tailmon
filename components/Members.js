import Person from "./Person";

function Members(props) {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-5 justify-center">
      {props.members.length === 0
        ? "No members to Display"
        : props.members.map((member) => {
            return (
              <div key={member._id} className="">
                <Person person={member} onDelete={props.onDelete} />
              </div>
            );
          })}
    </div>
  );
}

export default Members;
