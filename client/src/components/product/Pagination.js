import { Link } from "react-router-dom";

const Pagination = ({ productsPerPage, totalProducts, currentPage, handlePageChange }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav className="flex justify-center m-3">
        <ul className="flex pagination">
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item ${number === currentPage ? "bg-blue-500 text-white" : "text-blue-500"}`}
            >
              <Link
                onClick={() => handlePageChange(number)}
                className="page-link text-center block py-2 px-3 rounded-md cursor-pointer"
              >
                {number}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  export default Pagination