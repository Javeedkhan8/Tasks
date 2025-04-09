import { useState } from "react"

function App() {
  const [amount,setAmount] = useState('')

  function handleSubmit (e){
    e.preventDefault();
    if(amount == ""){
      alert("Please enter the amount")
    }
    else{
      var options = {
        key:"rzp_test_JHrZGfRIPK3PfS",
        key_secret:"rns4JcilEUlfEdn1Ntfb2TMg",
        amount:amount * 100,
        currency : "INR",
        name:"Razorpay Intergration",
        description:"for testing purpose",
        handler:function(response){
          alert(response.razorpay_payment_id)
        },
        prefill:{
          name:"Javeedkhan",
          email:"javeedkhanjohnbasha8@gmail.com",
          contact:"8825881332",
        },
        notes:{
          address:"Razorpay corporate office"
        },
        theme:{
          color:"#6495ED"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open()
    }

  }
  return (
    
    <div>
      <h2 className="bg-red-400">Razorpay Intergration</h2>
      <input 
      type="number"
      placeholder="Enter the amount"
      value={amount}
      onChange={(e)=> setAmount(e.target.value)}
      style={{
        width: "100%",
        maxWidth: "300px",
        padding: "12px",
        fontSize: "16px",
        border: "2px solid #3498db",
        borderRadius: "8px",
        outline: "none",
        transition: "0.3s ease-in-out",
      }}/>
      <br/>
      <button onClick={handleSubmit} style={{margin:"10px", padding:"8px",paddingLeft:"20px",
        paddingRight:"20px",borderRadius:"8px",border:"2px soild #3498db",backgroundColor:"#3498db"}}>Submit</button>
    </div>
    
  )
}

export default App
