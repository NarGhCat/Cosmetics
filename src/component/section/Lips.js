import React, { useState } from "react";
import { db } from "../../index";

function Lips() {
  const [outputOfLips, setOutputOfLips] = useState([]);
  
  const output = []
  // debugger
  db.collection("items")
    .get()
    .then((querySnapshot) => {
      // debugger;
      querySnapshot.forEach((doc) => {
        output.push(doc.data().name);
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
      });
    });
    
    console.log("outputItemNames ",  output);
  return (
    <div>
      <div style={{ background: "white", width: 400, height: 400 }}>
        {output.forEach((outputItem) => (
          <p>{outputItem}</p>
        ))}
      </div>
      <h1 style={{ color: "white" }}>aaaa</h1>
    </div>
  );
}

export default Lips;
