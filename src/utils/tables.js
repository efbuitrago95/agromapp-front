import React from "react";

export const objectHeaders = (object) => {
    const headers = [];
    if (object) {
        Object.keys(object).map((key, index) => {
            headers.push(key)
        })
    }
    return headers;
};

export const updateThSortBy = (th) => {
    if (th.sortedBy === null) {
        th.sortedBy = 1;
    } else if (th.sortedBy === 1) {
        th.sortedBy = -1;
    } else if (th.sortedBy === -1) {
        th.sortedBy = 1;
    }
    return th
};

export const returnSortIcon = (sortedBy) => {
    switch (sortedBy) {
        case 1:
            return (
                <i className="fa fa-sort-asc"/>
            );
        case -1:
            return (
                <i className="fa fa-sort-desc"/>
            );
        default:
            return (
                <i className="fa fa-sort"/>
            )
    }
};

export const returnBooleanLabel = (status: any) => {
    if (status) {
        return (
            <>
                <span className="label label-success">
                    <i className="fa fa-check"/>
                </span>
            </>
        );
    } else {
        return (
            <>
                <span className="label label-danger">
                    <i className="fa fa-close"/>
                </span>
            </>
        );
    }
}