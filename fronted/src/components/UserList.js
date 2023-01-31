import axios from "axios";

export const UserList = (props) => {
  // EDIT
  const editUser = async (user) => {
    /*Take info from fronted while editing someone click via prompt */
    const userName = prompt("Enter your New name");
    const userEmail = prompt("Enter your New mail");

    /*Check Both field enter or not */
    if (!userName || !userEmail) {
      alert("Both things is mandatory");
    } else {
      const updateUser = await axios.put(`/editUser/${user._id}`, {
        name: userName,
        email: userEmail,
      });
      console.log(updateUser);
    }
    props.bringUserData();
  };

  // DELETE
  const deleteUser = async (userID) => {
    const deleteOne = await axios
      .delete(`/deleteUser/${userID}`)
      .then(() => {
        "deleted";
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(deleteOne);
    props.bringUserData();
  };
  return (
    //bring the data here
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-8'>
            <h1 className='sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900'>
              All Users
            </h1>
          </div>
          <div className='lg:w-2/3 w-full mx-auto overflow-auto'>
            <table className='table-auto w-full text-left whitespace-no-wrap'>
              <thead>
                <tr>
                  <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl'>
                    Name
                  </th>
                  <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
                    Email
                  </th>
                  <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
                    Edit
                  </th>
                  <th className='px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100'>
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
              {props.usersInfo ? (
                props.usersInfo.map((user) => (
                  <tr key={user._id}>
                    <td className="px-4 py-3">{user.name} </td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">
                      <button
                        className="hover:text-green-500"
                        onClick={() => editUser(user)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-3 text-lg text-gray-900">
                      <button
                        className="hover:text-red-500"
                        onClick={() => deleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="text-center text-lg py-4 text-gray-400"
                  >
                    No user data available!
                  </td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserList;
