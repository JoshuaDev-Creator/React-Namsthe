

//<div>




const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"1stchild"},
    React.createElement("h1",{id:"heading"},"joshua"))
)




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)
