import { useEffect, useState } from "react";

export default function Data(){
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://freetestapi.com/api/v1/students');
            
            if (!response.ok) {
              throw new Error("Network Error.");  // Error with capital E
            }
            
            const data = await response.json();
            
            setInterval(() => {
              setData(data);
              setLoading(false);
            }, 1000);
          } catch (error) {
            setError(error);
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

    return(
        <div className="static mt-16">
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {data && (
                <ul className="m-4">
                    {data.map(std=>(
                        <li key={std.id} className="w-full bg-gray-200 mt-2 mb-2 p-4">
                            <strong>{std.id}.  {std.name}</strong>
                            <br/>
                            Age: {std.age}
                            <br/>
                            Gender: {std.gender}
                            <br/>
                            Address: {std.address.street}, {std.address.city}, {std.address.country}
                            <br/>
                            courses: {std.courses.map((item)=>(
                                <li className="ml-5 list-disc">{item}</li>
                            ))}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}