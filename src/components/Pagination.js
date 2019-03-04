import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {pager: {}};
    }

    componentWillMount() {
        /**
         * Set page if items array isn't empty
         */
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        /**
         * Reset page if items array has changed
         */
        if (this.props.items.length !== prevProps.items.length) {
            this.setPage(this.props.initialPage);
        }
        if (this.props.numPerPage !== prevProps.numPerPage) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage = (page) => {
        let items = this.props.items;
        items.forEach((item, index) => item.id = index);
        let pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        /**
         * Get new pager object for specified page
         * @type {{totalItems, startPage, startIndex, pages, endIndex, totalPages, pageSize, endPage, currentPage}}
         */
        pager = this.getPager(items.length, page, this.props.numPerPage);

        /**
         * Get new page of items from items array
         * @type {*[]}
         */
        let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        /**
         * Update state
         */
        this.setState({pager: pager});

        /**
         * Call change page function in parent component
         */
        this.props.onChangePage(pageOfItems);
    };

    getPager = (totalItems, currentPage, pageSize) => {
        /**
         * Default to first page
         * @type {*|number}
         */
        currentPage = currentPage || 1;

        /**
         * Default page size is 3
         * @type {*|number}
         */
        pageSize = pageSize || 3;

        /**
         * Calculate total pages
         * @type {number}
         */
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage, endPage;
        if (totalPages <= 3) {
            /**
             * Less than 3 total pages so show all
             * @type {number}
             */
            startPage = 1;
            endPage = totalPages;
        } else {
            /**
             * More than 3 total pages so calculate start and end pages
             */
            if (currentPage <= 2) {
                startPage = 1;
                endPage = 3;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 2;
                endPage = totalPages;
            } else {
                startPage = currentPage;
                endPage = currentPage + 2;
            }
        }

        /**
         * Calculate start and end item indexes
         * @type {number}
         */
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        /**
         * Create an array of pages to repeat in the pager control
         * @type {number[]}
         */
        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        /**
         * Return object with all paging properties required by the view
         */
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };

    render() {
        let pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }

        return (
            <ul className="pagination justify-content-center">
                <li className={pager.currentPage === 1 ? 'page-item disabled' : 'page-item'}>
                    <button type={'button'} onClick={() => this.setPage(1)}><span
                        className="page-link">|&#9664;</span></button>
                </li>
                <li className={pager.currentPage === 1 ? 'page-item disabled' : ''}>
                    <button type={'button'} onClick={() => this.setPage(pager.currentPage - 1)}><span
                        className="page-link">&#9664;</span></button>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage === page ? 'page-item active' : 'page-item'}>
                        <button type={'button'} onClick={() => this.setPage(page)}><span
                            className="page-link">{page}</span></button>
                    </li>
                )}
                <li className={pager.currentPage === pager.totalPages ? 'page-item disabled' : 'page-item'}>
                    <button type={'button'} onClick={() => this.setPage(pager.currentPage + 1)}><span
                        className="page-link">&#9654;</span>


                    </button>
                </li>
                <li className={pager.currentPage === pager.totalPages ? 'page-item disabled' : 'page-item'}>
                    <button type="button" onClick={() => this.setPage(pager.totalPages)}><span
                        className="page-link">&#9654;|</span></button>
                </li>
            </ul>
        );
    }
}

Pagination.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shapeOf({
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        starred: PropTypes.bool.isRequired,
        id: PropTypes.number
    })),
    initialPage: PropTypes.number.isRequired,
    numPerPage: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired
};

Pagination.defaultProps = {
    initialPage: 1
};

export default Pagination;