# Fetching data

## Hosting data

You can add a json file in the public folder of your project, in this example: [public/data.json](/public/data.json)   
Here you can add your data in json form and fetch in your project with `/data.json`

## Fetching the data

- Create a state to store your data with `useState`
- Add a `useEffect` to trigger the fetch when the component loads
- Check if there is no data
- Fetch the data from your url, parse the json and store the data in your state 
`fetch("/data.json")
        .then((result) => result.json())
        .then((resultData) => setData(resultData))`

- You can show a spinner to the users when there is no data. This will also make sure there is a data object when the page is rendering. If you don't do this you have to put a ? after your data variable to make sure JS stops executing that code when there is no data
- To type your data you can use [JSON to TS](https://transform.tools/json-to-typescript) to create types for you. You just have to paste your json object and it will generate types for you. You can change the name of the root type to something more suitable for your use case. Add the type to your `useState`

- [Example](/src/Pages/Home/Home.tsx)