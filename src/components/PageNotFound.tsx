import "../css/PageNotFound.css";

function PageNotFound() {
  return (
    <div className={"notfound-container"}>
      <h1 className={"notfound-header"}>
        Error 404: Sorry, we couldn't find this page.
      </h1>
      <a className={"notfound-link"} href="/">
        Click here to go back to the home page
      </a>
    </div>
  );
}

export default PageNotFound;
