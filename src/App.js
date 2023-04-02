import React from "react";
import { Admin, Resource } from "react-admin";
import SimpleRestProvider from "ra-data-simple-rest";
import postList from "./components/postList";


const App = () => (
  <Admin dataProvider={SimpleRestProvider("http://localhost:3000")}>
    <Resource name="post" list={postList} />
  </Admin>
);

export default App;
