import { MdDelete } from "react-icons/md";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const nameRef = useRef(null);

  const ageRef = useRef(null);
  const dispatach = useDispatch();
  const users = useSelector((state) => state.users.users);
  console.log(users);

  const validate = () => {
    return true;
  };

  function hendleForm(e) {
    e.preventDefault();
    // console.log(nameRef.current.value)
    // console.log(ageRef.current.value)
    const isValid = validate();

    if (isValid) {
      const user = {
        name: nameRef.current.value,
        age: ageRef.current.value,
        id: Date.now(),
      };
      dispatach({ type: "USER_ADD", payload: user });
      nameRef.current.value = null;
      ageRef.current.value = null;
    }
  }

  function handleDelete(id) {
    let isDelete = confirm("Are you want delete?");
    if (isDelete) {
      dispatach({ type: "USER_DELETE", payload: id });
    }
  }

  return (
    <>
      <form
        onSubmit={hendleForm}
        className="w-1/2 mx-auto flex flex-col gap-5 mt-10"
      >
        <h1 className="text-center font-bold text-xl text-white">User Form</h1>
        <input
          className="p-4 border border-solid border-yellow-100 rounded "
          type="text"
          ref={nameRef}
          placeholder="Name..."
        />
        <input
          className="p-4 border border-solid border-yellow-100 rounded  "
          type="number"
          ref={ageRef}
          placeholder="Age..."
        />
        <button className="p-4 bg-[#f5deb3] rounded transition duration-150 hover:bg-[#c8b592] text-xl font-bold">
          SAVE
        </button>
      </form>

      <div className="w-1/2 mx-auto flex flex-col gap-5 mt-10 text-white">
        <table className="w-full text-left border">
          <thead>
            <tr>
              <th className="border ">No</th>
              <th className="border ">Name</th>
              <th className="border ">Age</th>
              <th className="border ">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td className="border ">{index + 1}</td>
                    <td className="border ">{user.name}</td>
                    <td className="border ">{user.age}</td>
                    <td className="border ">
                      <MdDelete
                        onClick={() => {
                          handleDelete(user.id);
                        }}
                        className="cursor-pointer"
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
