import TableComponent from '../components/Table'

function UserManagement() {
    //Table head needs to be set manually.
    const TableHead = ["ID", "Employee Name", "Role", "Status", "Action"];
    // This is just some dummy data
    const TableData = [
        {
            "ID" : "ID001",
            "empName" : "Semora",
            "empNssames" : "backoffice officer",
            "empNssame" : "active",
        },
        {
            "ID" : "ID001",
            "empName" : "Semora",
            "empNssames" : "backoffice officer",
            "empNssame" : "active",
        }
    ]

    function testFunction1({id}){
        console.log("test function1 clicked" + {id})
    }

    function testFunction2({id}){
        console.log("test function2 clicked")
    }

    const functions = [
        {
            "buttonName ": "button1",
            "functionName" : testFunction1
        },
        {
            "buttonName ": "button2",
            "functionName" : testFunction2
        },
        {
            "buttonName ": "button3",
            "functionName" : testFunction2
        },
    ]

  return (
    <>
     <TableComponent tableHeadData={TableHead} tableBodyData={TableData} functions={functions}/>
    </>
  );
}

export default UserManagement;
