import React from "react"
import { useParams } from "react-router";


export default function Detail({data}){
   const { slug } = useParams();

  // Dynamically extract matching property detail
  const detail = data?.propertyDetailData;

  console.log("🧩 Slug:", slug);
  console.log("📦 property detail:", detail);
    console.log(data)

    return (
        <>
            <h1>
                Hello from Project Detail Page
            </h1>
        </>
    )
}


