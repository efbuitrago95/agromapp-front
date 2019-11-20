export const stringListToArrayList = (string) => {
    let list = [];
    if (string.includes(",")) {
        list = string.trim()
            .replace(/(\r\n|\n|\r)/gm, "")
            .replace(/ /g, '')
            .split(",");
    } else {
        list = string.replace(/\s/g, " ")
            .split(" ");
    }
    return list
};

export const parametersListToObject = (list) => {
    const parameters = {};
    list.map(parameter => {
        parameters[parameter.key] = parameter.value
    });
    return parameters
};

export const parametersObjectToList = (object) => {
    const parameters_list = [];
    if (object) {
        Object.keys(object).map((key, index) => {
            parameters_list.push({
                id: index + 1,
                key: key,
                value: object[key],
                format: typeof object[key]
            });
        });
        if (!parameters_list.length) {
            parameters_list.push({
                id: 1,
                key: "",
                value: "",
                format: "string"
            });
        }
    }
    return parameters_list
};

export const rdsParams = () => {
    return {
        "url": "",
        "port": 5432,
        "user": "",
        "driver": "postgres",
        "tempdir": "s3a://aws-emr-mytmp/",
        "database": "",
        "over_ssh": false,
        "password": ""
    }
};

export const snowflakeParams = () => {
    return {
        "url": "",
        "user": "",
        "driver": "snowflake",
        "region": "",
        "schema": "",
        "account": "",
        "tempdir": "s3a://aws-emr-mytmp/",
        "database": "",
        "over_ssh": false,
        "password": "",
        "warehouse": "",
        "use_region": true
    }
};

export const s3Params = () => {
    return {
        "url": "",
    }
};

export const sqlConciliationParams = () => {
    return {
        "url": "",
    }
};

export const KeyVsKeyConciliationParams = () => {
    return {
        "name": "",
        "table_a": "",
        "table_b": "",
        "a_prefix": "",
        "b_prefix": "",
        "missing_a": true,
        "missing_b": true,
        "references": [{"a_ref": "", "b_ref": "", "operator": "="}],
        "allocation_a": {"date": "", "amount": ""},
        "allocation_b": {"date": "", "amount": ""},
        "table_a_filter": {
            "conditions": [{
                "value": "",
                "column": "",
                "operator": "="
            }]
        },
        "table_b_filter": null
    }
};