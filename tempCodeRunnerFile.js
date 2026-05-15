mongoose
  .connect("mongodb+srv://juliannamarizmarquez:Julianna20@expressnodeapp.qcpb5c.mongodb.net/")
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1); 
  });