// import React from "react";
import ReactDOM from 'react-dom';
import paintings from './paintings.json';
import Painting from './components/Painting';
import App from './App';

// const painting = paintings[2];

ReactDOM.render(<App />, document.querySelector('#root'));

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// =================
// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Author: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Price: {data.price} credits</p>
//     <p>Avaliable: Seamble on in stock</p>
//     <button type="button">Add to Basket</button>
//   </div>
// );

// console.log(painting);

// const elem1 = <span>Hellow</span>;
// // React.createElement("span", { children: "Hellow" });
// const elem2 = <span>world</span>;
// // React.createElement("span", { children: "world" });

// const jsxElement = (
// 	<div>
// 		{elem1}
// 		{elem2}
// 	</div>
// );

// console.log(jsxElement);
