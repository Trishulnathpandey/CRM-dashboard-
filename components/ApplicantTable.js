import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSearch, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../styles/ApplicantTable.css'; // Assuming you have a CSS file for styles

const generateDummyData = (num) => {
    const dummyData = [];
    for (let i = 1; i <= num; i++) {
        dummyData.push({
            id: `ID${100000 + i}`,
            name: `Applicant ${i}`,
            email: `applicant${i}@example.com`,
            mobile: `+1 (555) 010-${String(i).padStart(4, '0')}`,
            city: 'City ' + (i % 10),
            source: 'Source ' + (i % 5),
            state: 'State ' + (i % 5),
            status: i % 2 === 0 ? 'New lead' : 'In progress',
            jobTitle: `Job Title ${i}`,
            ownership: `Owner ${i}`,
            workAuth: i % 3 === 0 ? 'US Citizen' : 'Green Card Holder',
            createdBy: `Creator ${i}`,
            createdOn: `09/${i % 30 + 1}/24 ${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
            createdDate: `09/${i % 30 + 1}/24`,
        });
    }
    return dummyData;
};

const ApplicantTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const applicants = generateDummyData(1000);
    const totalPages = Math.ceil(applicants.length / 25);
    const rowsPerPage = 25;

    const filteredApplicants = applicants.filter(applicant =>
        applicant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="table-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search Any"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />

                <button className="search-icon-wrapper" onClick={handleSearch}>
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" />
                        </th>
                        <th>Applicant ID <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>Applicant Name <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>Email Address <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>Mobile Number <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>City <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>Source <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>State <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>Applicant Status <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>Job Title <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>Ownership <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>Work Authorization <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>Created By <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>Created On <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                        <th>Created Date <FontAwesomeIcon icon={faSort} className="header-icon" /></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredApplicants.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage).map((applicant) => (
                        <tr key={applicant.id}>
                            <td><input type="checkbox" /></td>
                            {/* Links to Profile Page */}
                            <td>
                                <Link to={`/profile/ID/${applicant.id}`}>{applicant.id}</Link>
                            </td>
                            <td>
                                <Link to={`/profile/Name/${applicant.name}`}>{applicant.name}</Link>
                            </td>
                            <td>{applicant.email}</td>
                            <td>
                                <Link to={`/profile/Mobile/${applicant.mobile}`}>{applicant.mobile}</Link>
                            </td>
                            <td>{applicant.city}</td>
                            <td>{applicant.source}</td>
                            <td>{applicant.state}</td>
                            <td>{applicant.status}</td>
                            <td>{applicant.jobTitle}</td>
                            <td>{applicant.ownership}</td>
                            <td>{applicant.workAuth}</td>
                            <td>{applicant.createdBy}</td>
                            <td>{applicant.createdOn}</td>
                            <td>{applicant.createdDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination Section */}
            <div className="pagination">
                <span>{(currentPage - 1) * rowsPerPage + 1} - {Math.min(currentPage * rowsPerPage, filteredApplicants.length)} of {filteredApplicants.length}</span>

                <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                    <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </button>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>

                <span className="page-number">{currentPage}</span>

                {currentPage < totalPages && (
                    <>
                        {currentPage + 1 <= totalPages && <button onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 1}</button>}
                        {currentPage + 2 <= totalPages && <button onClick={() => setCurrentPage(currentPage + 2)}>{currentPage + 2}</button>}
                        {currentPage + 3 <= totalPages && <button onClick={() => setCurrentPage(currentPage + 3)}>{currentPage + 3}</button>}
                        <button onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
                    </>
                )}

                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
                    <FontAwesomeIcon icon={faAngleDoubleRight} />
                </button>
            </div>
        </div>
    );
};

export default ApplicantTable;
