import { useEffect, useState } from "react";

export default function Data({ recievedData, searchedData }) {        // "recievedData" is recieved from navBar
  const [data, setData] = useState([]);                 //making two null arrays, this
  const [sortedData, setSortedData] = useState([]);     //and that
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/students");
        if (!response.ok) {
          throw new Error("Network Error."); // Error with capital E
        }
        const temp = await response.json();         //api data is assigned to the temp
        setData(temp);                              //storing the same data of api
        setSortedData(temp);                        //on both of the arrays
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  //now comparing and sorting the name, age, rank of "data" array, meanwhile "sortedData" is being showed in the page initially.
  //and after the "data" array is sorted, It is assigned to the "sortedData"
  useEffect(() => {
    const sortedStudents = [...data].sort((a, b) => {
      if (recievedData === "name") {
        if (a.name.localeCompare(b.name) !== 0) {
          return a.name.localeCompare(b.name);
        }
      } else if (recievedData === "age") {
        if (a.age !== b.age) {
          return a.age - b.age;
        }
      } else {
        return a.id - b.id;
      }
    });
    setSortedData(sortedStudents);      //"sortedData" assigned to the sorted "Data" array.
  }, [recievedData]);       //when ever the option/data of recievedData is changed, the useEffect runs.
  
  useEffect(() => {
    if (searchedData) {
      const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchedData.toLowerCase()) // Filtering by the 'name' property
      );
      setSortedData(filteredData);
    } else {
      setSortedData(data);  
    }
  }, [searchedData, data]);
  


  return (
    <div className="static mt-16">
      {error && <p>{error.message}</p>}
      {data && (
        <ul className="m-4">
          {sortedData.map((std) => (
            <li
              key={std.id}
              className="w-full bg-gray-200 mt-2 mb-2 p-4 rounded-xl"
            >
              <strong>
                {std.id}. {std.name}
              </strong>
              <br />
              Age: {std.age}
              <br />
              Gender: {std.gender}
              <br />
              Address: {std.address.street}, {std.address.city},{" "}
              {std.address.country}
              <br />
              courses:{" "}
              {std.courses.map((item) => (
                <li className="ml-5 list-disc">{item}</li>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
