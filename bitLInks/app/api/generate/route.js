import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  let body = await request.json();
  console.log(body);

  let client = await clientPromise;
  let db = client.db("bitLinks");
  let collection = db.collection("url");
  if (body.url === "" || body.shorten === "") {
    alert("something is missy");
  }
  let docs = await collection.findOne({ shorten: body.shorten });
  console.log(docs);

  if (docs) {
    return Response.json({
      success: false,
      error: true,
      message: "Shorten URL is already Existed...",
    });
  }
  await collection.insertOne({
    url: body.url,
    shorten: body.shorten,
  });

  return Response.json({
    success: true,
    error: false,
    message: "URL generated Successfully",
  });
}

// export async function GET(request) {
//     const requestOptions = {
//         method: "GET",
//         redirect: "follow"
//       };

//       fetch("/api/generate", requestOptions)
//         .then((response) => response.json())
//         .then((result) => console.log(result))
//         .catch((error) => console.error(error));
//     // let client = await clientPromise
//     // let db = client.db("bitLinks")
//     // let collection =  db.collection("url")

//     // let docs = await collection.find().toArray()
//     // console.log(docs)

// return Response.json({ success:true, error:false, message: `${docs.url}`})

// }

export async function GET(request) {
  // try {
  // Assuming clientPromise is your MongoDB client promise
  let client = await clientPromise;
  let db = client.db("bitLinks");
  let collection = db.collection("url");

  // Find all documents in the collection and convert to an array
  let docs = await collection.find().toArray();

  console.log(docs); // Log the documents for debugging

  // Return the documents as JSON response
  return Response.json({
    success: true,
    error: false,
    message: docs
  });
  // )(JSON.stringify({
  //      // You can return the full docs or map specific data like `docs.map(doc => doc.url)`
  // }))
  //     , {
  //         status: 200,
  //         headers: { 'Content-Type': 'application/json' }
  //     });
  // } catch (error) {
  //     console.error("Error fetching documents:", error);

  //     // Return error response if something goes wrong
  //     return new Response(JSON.stringify({
  //         success: false,
  //         error: true,
  //         message: error.message
  //     }), {
  //         status: 500,
  //         headers: { 'Content-Type': 'application/json' }
  //     });
  // }
}
