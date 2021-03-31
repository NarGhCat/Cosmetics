import React, { useEffect, useState } from "react";
import { db } from "../../index";


const Lips = () => {
  const [outputOfLips, setOutputOfLips] = useState([]);
  let output = [...outputOfLips]
  useEffect(() => {
    db.collection("items").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        output.push(doc.data().name)
      });
      setOutputOfLips(output)
    });
  }, [])

  return (
    <div>
      <div style={{ background: "white", width: 1200, height: 2500 }}>
        {outputOfLips.map((item, i) => (
          <p key={i} >{item}</p>
        ))}
      </div>
      <h1 style={{ color: "white" }}>aaaa</h1>
    </div>
  );
}
export default Lips;
