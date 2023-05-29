# Setup

## start

- Run:   
`npm create vite@latest <project-name>` 

- Select React
- Select TypeScript + SWC
- `cd` to the project folder
- Run: `npm install`
- Run: `npm run dev` to start the project

## MUI

- Run: `npm install @mui/material @emotion/react @emotion/styled`
- Run: `npm install @fontsource/roboto`

- [Docs](https://mui.com/material-ui/getting-started/installation/)

## Routing

- Run: `npm install react-router-dom`

- [Docs](https://reactrouter.com/en/main/start/tutorial)

- In the app file add `<RouterProvider router={router} />`

- Create a router in the [router file](/src/Router/router.tsx)

- Add all pages to this file

## Create component

- Create a file ending in `.tsx`

- You can use a snippet to generate the setup code for a component with mui

- To add the snippet go to User snippets under the settings icon in VScode

- Select the `typescriptreact.json` file in the popup

- Add the following to the file:

 ```json
{
	"React functional component": {
		"prefix": "rfc",
		"body": [
		  "import { FC } from 'react';",
		  "import { Box } from '@mui/material';",
		  "",
		  "export interface ${1:Component}Props {}",
		  "",
		  "export const ${1:Component}: FC<${1:Component}Props> = () => {",
		  "  return <Box>${1:Component}</Box>;",
		  "};",
		  ""
		],
		"description": "React functional component"
	  }
}
 ```

- Now you can type `rfc` in your `.tsx` files and this will generate the start code for you