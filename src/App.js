import Card from "./Card Component/Card";

function App(){
    const data = {
        id:"zxcvsdfghfghxch",
        name:"Vaibhav",
        phone:"9455454",
        email:"saxena@123.com",
        address:"Rohan Nagar, Indore",
        repname:"Rohanppp",
        fatherName:undefined,
    };
    const keyTitleMap = {
        id:"dontShow",
        name:"Customer Name",
        phone:"Phone",
        email:"Email",
        address:"Address",
        repname:"Rep Name",
        fatherName: "Father's Name||dontShowEmpty",
        motherName:"Mother's Name"
    }

    return(
        <div>
            <Card data={data} keyTitleMap={keyTitleMap}/>
    </div>
    );
}

export default App;